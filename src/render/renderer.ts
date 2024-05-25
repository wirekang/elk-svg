import type { Classnamer } from "../classnames";
import type { RenderElement, RenderElementType, RenderElements } from "../render-types";
import type { Logger, Shape } from "../types";
import { deepEqual, svg, transform } from "../utils";
import { edgeComponent } from "./components/edge";
import { labelComponent } from "./components/label";
import { nodeComponent } from "./components/node";
import { portComponent } from "./components/port";
import { DepthGroup } from "./depth-group";
import { DomRef } from "./dom-ref";
import type { Component, RenderingContext } from "./types";

export class Renderer {
  private readonly groups: Record<RenderElementType, DepthGroup>;
  private readonly components = {
    node: nodeComponent,
    port: portComponent,
    edge: edgeComponent,
    label: labelComponent,
  };
  private readonly componentKeys = new Map<string, any>();
  private readonly domRef = new DomRef("domRef");

  constructor(private readonly o: RendererOptions) {
    const topLevelGroup = svg("g");
    topLevelGroup.classList.add(o.classnamer("top-level-group"));
    o.container.append(topLevelGroup);
    this.groups = {
      node: new DepthGroup(o.classnamer("node-group"), topLevelGroup),
      port: new DepthGroup(o.classnamer("port-group"), topLevelGroup),
      edge: new DepthGroup(o.classnamer("edge-group"), topLevelGroup),
      label: new DepthGroup(o.classnamer("label-group"), topLevelGroup),
    };
  }

  public render(renderElements: RenderElements) {
    const deletedIds = this.domRef.ids();
    renderElements.nodes.forEach(this.renderElement.bind(this, "node", deletedIds));
    renderElements.ports.forEach(this.renderElement.bind(this, "port", deletedIds));
    renderElements.edges.forEach(this.renderElement.bind(this, "edge", deletedIds));
    renderElements.labels.forEach(this.renderElement.bind(this, "label", deletedIds));
    deletedIds.forEach((id) => {
      this.domRef.delete(id);
    });
  }

  public ref(id: string) {
    return this.domRef.getOrNull(id);
  }

  private renderElement(
    type: RenderElementType,
    idMarking: Set<string>,
    element: RenderElement,
  ) {
    idMarking.delete(element.id);
    const group = this.groups[type].get(element.depth);
    const component = this.components[type];
    const ctx: RenderingContext<any> = {
      logger: this.o.logger,
      element,
      classnamer: this.o.classnamer,
      shapes: this.o.shapes,
    };
    if (!this.keyChanged(component, ctx)) {
      this.domStateless(type, element, this.domRef.get(element.id));
      return;
    }
    const domElement = component.render(ctx);
    this.domRef.delete(element.id);
    this.domRef.set(element.id, domElement);
    this.domStateless(type, element, domElement);
    group.append(domElement);
  }

  private domStateless(
    type: RenderElementType,
    element: RenderElement,
    domElement: Element,
  ) {
    domElement.setAttribute(
      "class",
      [this.o.classnamer(type), ...element.classes].join(" "),
    );
    if (this.o.idAttribute) {
      domElement.setAttribute(this.o.idAttribute, element.id);
    }
    const e = element as any;
    if (e.x || e.y) {
      transform(domElement, { translate: e });
    }
  }

  private keyChanged(component: Component<any>, ctx: RenderingContext<any>) {
    const key = component.key(ctx);
    const previousKey = this.componentKeys.get(ctx.element.id);
    this.componentKeys.set(ctx.element.id, key);
    if (previousKey === undefined) {
      return true;
    }
    return !deepEqual(key, previousKey);
  }
}

export type RendererOptions = {
  container: Element;
  classnamer: Classnamer;
  idAttribute?: string;
  logger: Logger;
  shapes: Record<string, Shape>;
};
