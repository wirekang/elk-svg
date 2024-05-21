import { ATTRNAMES, CLASSNAMES, type Attrnames, type Classnames } from "./names";
import type { Component, ComponentRenderContext, RenderData } from "./components/types";
import { ElementRegistry } from "./element-registry";
import type { ElkGraphElement, ElkNode } from "./elk-types";
import { NODE_SHAPE_FUNCTIONS, type NodeShapeFunction } from "./node-shape";
import { freezeMerge, svg, transform } from "./utils";
import { Check, Checker } from "./checker";
import { defaultLogger, type Logger } from "./logger";
import { nodeComponent } from "./components/node";
import { edgeComponent } from "./components/edge";
import { labelComponent } from "./components/label";
import { portComponent } from "./components/port";

export type ElkSvgOptions = {
  container: Element;
  nodeShapeFunctions?: Record<string, NodeShapeFunction>;
  classnames?: Classnames;
  attrnames?: Attrnames;
  logger?: Logger;

  /**
   * `defaultRenderData` is used if there is no `RenderData` for given id.
   */
  defaultRenderData?: RenderData;
};

export type ElkSvgRenderData = Record<string, RenderData>;

export class ElkSvg {
  private readonly logger: Logger;
  private readonly nodeShapeFunctions: Record<string, NodeShapeFunction>;
  private readonly classnames: Classnames;
  private readonly attrnames: Attrnames;
  private readonly defaultRenderData: RenderData;

  private readonly groupRegistry = new ElementRegistry("group");
  private readonly componentRegistry = new ElementRegistry("component");
  private readonly volatileElements: Element[] = [];

  private readonly keyChecker = new Checker<string, string>();
  private readonly parentIdChecker = new Checker<string, string | null>();

  private readonly topLevelGroup: Element;
  private readonly renderContxt = {
    deletionEl: null as any as ElementRegistry,
    parent: null as any as Element,
    parentId: null as string | null,
    d: {} as ElkSvgRenderData,
  };

  constructor(options: ElkSvgOptions) {
    this.nodeShapeFunctions = freezeMerge(
      NODE_SHAPE_FUNCTIONS,
      options.nodeShapeFunctions,
    );
    this.classnames = freezeMerge(CLASSNAMES, options.classnames);
    this.attrnames = freezeMerge(ATTRNAMES, options.attrnames);
    this.logger = options.logger ?? defaultLogger;
    this.defaultRenderData = freezeMerge(options.defaultRenderData);
    this.topLevelGroup = svg("g");
    this.topLevelGroup.classList.add(this.classnames.topLevelGroup);
    options.container.appendChild(this.topLevelGroup);
  }

  render(rootNode: ElkNode, d: ElkSvgRenderData) {
    this.cleanVolatileElements();

    this.renderContxt.parent = this.topLevelGroup;
    this.renderContxt.parentId = null;
    this.renderContxt.deletionEl = this.groupRegistry.clone("deletion");
    this.renderContxt.d = d;
    const cb = (node: ElkNode) => {
      const g = this.renderElkElement(nodeComponent, node);

      node.children?.forEach((v) => {
        this.renderContxt.parent = g;
        this.renderContxt.parentId = node.id;
        cb(v);
      });

      node.edges?.forEach((edge) => {
        this.renderContxt.parent = g;
        this.renderContxt.parentId = node.id;
        this.renderElkElement(edgeComponent, edge);

        edge.labels?.forEach((label) => {
          this.renderElkElement(labelComponent, label);
        });
      });

      node.ports?.forEach((port) => {
        this.renderContxt.parent = g;
        this.renderContxt.parentId = node.id;
        const portG = this.renderElkElement(portComponent, port);

        port.labels?.forEach((label) => {
          this.renderContxt.parent = portG;
          this.renderContxt.parentId = port.id;
          this.renderElkElement(labelComponent, label);
        });
      });

      node.labels?.forEach((label) => {
        this.renderContxt.parent = g;
        this.renderContxt.parentId = node.id;
        this.renderElkElement(labelComponent, label);
      });
    };
    cb(rootNode);
    this.cleanDeletedElements();
  }

  private cleanVolatileElements() {
    this.logger.debug("delete volatile", this.volatileElements.length);
    this.volatileElements.forEach((e) => {
      e.remove();
    });
    this.volatileElements.length = 0;
  }

  private cleanDeletedElements() {
    this.logger.debug("delete", this.renderContxt.deletionEl.size());
    this.renderContxt.deletionEl.deleteAll();
  }

  private renderElkElement(component: Component, ee: ElkGraphElement) {
    if (ee.id) {
      this.renderContxt.deletionEl.unset(ee.id);
    }
    const gde = this.renderGroup(ee);
    const cn = component.name as "node" | "edge" | "port" | "label";
    gde.classList.add(this.classnames[`${cn}Group`]);
    transform(gde, { translate: ee as any });
    if (ee.id) {
      gde.setAttribute(this.attrnames.id, ee.id);
    }
    const cde = this.renderComponent(component, ee, gde);
    if (cde) {
      cde.classList.add(this.classnames[`${cn}Component`]);
    }
    return gde;
  }

  private renderGroup(ee: ElkGraphElement): SVGGElement {
    const id = ee.id;
    if (!id) {
      const de = svg("g");
      this.volatileElements.push(de);
      this.renderContxt.parent.appendChild(de);
      return de;
    }

    const existing = this.groupRegistry.getOrNull(id);
    if (existing !== null) {
      const parentIdCheck = this.parentIdChecker.check(id, this.renderContxt.parentId);
      switch (parentIdCheck) {
        case Check.new:
        case Check.changed:
          this.renderContxt.parent.appendChild(existing);
          break;
        case Check.unchanged:
      }
      return existing as any;
    }

    const de = svg("g");
    this.renderContxt.parent.appendChild(de);
    this.groupRegistry.set(id, de);
    this.keyChecker.reset(id);
    return de;
  }

  private renderComponent(
    component: Component,
    ee: ElkGraphElement,
    gde: Element,
  ): Element | null {
    const id = ee.id;
    const data = this.getData(ee);

    if (!component.validate(ee, data)) {
      this.logger.error(`validation failed: ${component.name}(${id})`);
      return null;
    }
    const ctx: ComponentRenderContext = {
      logger: this.logger,
      nodeShapeFunctions: this.nodeShapeFunctions,
    };

    if (!id) {
      const de = component.render(ctx, ee, data);
      if (!de) {
        return null;
      }
      gde.appendChild(de);
      return de;
    }

    const keyCheck = this.keyChecker.check(id, component.key(ee, data));
    switch (keyCheck) {
      case Check.changed:
        this.componentRegistry.delete(id);
      case Check.new:
        const de = component.render(ctx, ee, data);
        if (!de) {
          return null;
        }
        this.componentRegistry.set(id, de);
        gde.appendChild(de);
        return de;
      case Check.unchanged:
        return this.componentRegistry.get(id);
    }
    throw new Error("unreachable");
  }

  private getData(e: { id?: string }) {
    if (!e.id || this.renderContxt.d[e.id] === undefined) {
      return { ...this.defaultRenderData };
    }
    return { ...this.renderContxt.d[e.id] };
  }
}
