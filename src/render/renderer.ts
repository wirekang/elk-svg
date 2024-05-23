import equal from "fast-deep-equal";
import type { FlatElement, FlatElementType, FlatElements } from "../flat-types";
import type { Logger } from "../logger";
import type { RenderingContext } from "./types";
import { svg, transform } from "../utils";
import { edgeComponent } from "./components/edge";
import { labelComponent } from "./components/label";
import { nodeComponent } from "./components/node";
import { portComponent } from "./components/port";
import { DepthGroup } from "./depth-group";
import type { Component } from "./types";
import type { Shape } from "../shape-types";
import { DomRef } from "./dom-ref";
import type { Classnamer } from "../classnames";

export class Renderer {
  private readonly groups: Record<FlatElementType, DepthGroup>;
  private readonly components = {
    node: nodeComponent,
    port: portComponent,
    edge: edgeComponent,
    label: labelComponent,
  };
  private readonly componentKeys = new Map<string, any>();
  private readonly domRef = new DomRef("flat");

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

  public render(flatElements: FlatElements) {
    const deletedIds = this.domRef.ids();
    flatElements.nodes.forEach(this.renderElement.bind(this, "node", deletedIds));
    flatElements.ports.forEach(this.renderElement.bind(this, "port", deletedIds));
    flatElements.edges.forEach(this.renderElement.bind(this, "edge", deletedIds));
    flatElements.labels.forEach(this.renderElement.bind(this, "label", deletedIds));
    deletedIds.forEach((id) => {
      this.domRef.delete(id);
    });
  }

  private renderElement(
    type: FlatElementType,
    idMarking: Set<string>,
    element: FlatElement,
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

  private domStateless(type: FlatElementType, element: FlatElement, domElement: Element) {
    const classes = element.svg.classes ?? [];
    domElement.setAttribute("class", [this.o.classnamer(type), ...classes].join(" "));
    if (this.o.idAttribute) {
      domElement.setAttribute(this.o.idAttribute, element.id);
    }
    transform(domElement, { translate: element });
  }

  private keyChanged(component: Component<any>, ctx: RenderingContext<any>) {
    const key = structuredClone(component.key(ctx));
    const previousKey = this.componentKeys.get(ctx.element.id);
    this.componentKeys.set(ctx.element.id, key);
    if (previousKey === undefined) {
      return true;
    }
    return !equal(key, previousKey);
  }
}

export type RendererOptions = {
  container: Element;
  classnamer: Classnamer;
  idAttribute?: string;
  logger: Logger;
  shapes: Record<string, Shape>;
};
