import {
  defaultClassnames,
  defaultEdgeArrowFunctions,
  defaultLogger,
  defaultNodeShapeFunctions,
} from "./defaults";
import { ElementRegistry } from "./element-registry";
import { freezeMerge, svg, transform } from "./utils";
import { Check, Checker } from "./checker";
import { nodeComponent } from "./components/node";
import { edgeComponent } from "./components/edge";
import { labelComponent } from "./components/label";
import { portComponent } from "./components/port";
import type {
  ElkSvgElement,
  ElkSvgNode,
  Classnames,
  ElkSvgOptions,
  Logger,
  NodeShapeFunction,
  EdgeArrowFunction,
} from "./types";
import type { Component, ComponentRenderContext } from "./components/types";

/**
 * Check out {@link https://github.com/wirekang/elk-svg/wiki | Wiki}.
 */
export class ElkSvg {
  private readonly logger: Logger;
  private readonly nodeShapeFunctions: Record<string, NodeShapeFunction>;
  private readonly edgeArrowFunctions: Record<string, EdgeArrowFunction>;
  private readonly classnames: Classnames;
  private readonly defaultOptions: Record<string, any>;

  private readonly groupRegistry = new ElementRegistry("group");
  private readonly componentRegistry = new ElementRegistry("component");
  private readonly volatileElements: Element[] = [];

  private readonly keyChecker = new Checker<string, string>();
  private readonly parentIdChecker = new Checker<string, string | null>();

  private readonly topLevelGroup: Element;
  private readonly renderContxt = {
    groupRegistryForDeletion: "unreachable" as any as Set<string>,
    parent: null as any as Element,
    parentId: null as string | null,
  };

  private readonly idAttribute: string | null;

  constructor(options: ElkSvgOptions) {
    this.nodeShapeFunctions = freezeMerge(
      defaultNodeShapeFunctions,
      options.nodeShapeFunctions,
    );
    this.edgeArrowFunctions = freezeMerge(
      defaultEdgeArrowFunctions,
      options.edgeArrowFunctions,
    );
    this.classnames = freezeMerge(defaultClassnames, options.classnames);
    this.logger = options.logger ?? defaultLogger;
    this.defaultOptions = Object.freeze({
      node: freezeMerge(options.defaultOptions?.node),
      edge: freezeMerge(options.defaultOptions?.edge),
      port: freezeMerge(options.defaultOptions?.port),
      label: freezeMerge(options.defaultOptions?.label),
    });

    this.topLevelGroup = svg("g");
    this.topLevelGroup.classList.add(this.classnames.topLevelGroup);
    options.container.appendChild(this.topLevelGroup);
    this.idAttribute = options.idAttribute ?? null;
  }

  public getGroupElement(id: string): SVGGElement | null {
    return this.groupRegistry.getOrNull(id) as any;
  }

  public getComponentElement(id: string): Element | null {
    return this.componentRegistry.getOrNull(id) as any;
  }

  public render(rootNode: ElkSvgNode) {
    this.cleanVolatileElements();

    this.renderContxt.parent = this.topLevelGroup;
    this.renderContxt.parentId = null;
    this.renderContxt.groupRegistryForDeletion = this.groupRegistry.ids();
    const cb = (node: ElkSvgNode) => {
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
    this.logger.debug("delete", this.renderContxt.groupRegistryForDeletion.size);
    this.renderContxt.groupRegistryForDeletion.forEach((id) => {
      this.groupRegistry.delete(id);
    });
  }

  private renderElkElement(component: Component, ee: ElkSvgElement) {
    if (ee.id) {
      this.renderContxt.groupRegistryForDeletion.delete(ee.id);
    }
    const gde = this.renderGroup(ee);
    const cn = component.name as "node" | "edge" | "port" | "label";
    gde.classList.add(this.classnames[`${cn}Group`]);
    if (ee.id && this.idAttribute) {
      gde.setAttribute(this.idAttribute, ee.id);
    }
    transform(gde, { translate: ee as any });
    const cde = this.renderComponent(component, ee, gde);
    if (cde) {
      cde.classList.add(this.classnames[`${cn}Component`]);
    }
    return gde;
  }

  private renderGroup(ee: ElkSvgElement): SVGGElement {
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
    ee: ElkSvgElement,
    gde: Element,
  ): Element | null {
    const id = ee.id;
    this.setDefaultOptions(ee, component.name);

    if (!component.validate(ee)) {
      this.logger.error(`validation failed: ${component.name}(${id})`);
      return null;
    }
    const ctx: ComponentRenderContext = {
      logger: this.logger,
      nodeShapeFunctions: this.nodeShapeFunctions,
      edgeArrowFunctions: this.edgeArrowFunctions,
      classnames: this.classnames,
    };

    if (!id) {
      const de = component.render(ctx, ee);
      if (!de) {
        return null;
      }
      gde.appendChild(de);
      return de;
    }

    const keyCheck = this.keyChecker.check(id, component.key(ee));
    switch (keyCheck) {
      case Check.changed:
        this.componentRegistry.delete(id);
      case Check.new:
        const de = component.render(ctx, ee);
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

  private setDefaultOptions(e: { svg?: any }, name: string) {
    e.svg = freezeMerge(this.defaultOptions[name], e.svg);
  }
}
