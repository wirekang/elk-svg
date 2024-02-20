import { ElkNode } from "elkjs";
import { DomPatcher } from "./dom-patcher.js";
import { SvgContainer } from "./svg-container.js";
import { SvgRenderer } from "./svg-renderer.js";
import { RenderPropsMap } from "./typings.js";

export class ElkSvg {
  private readonly domPatcher: DomPatcher;
  private readonly svgContainer = new SvgContainer();

  constructor(container: HTMLElement) {
    this.domPatcher = new DomPatcher(container);
  }

  getSvgContainer(): SvgContainer {
    return this.svgContainer;
  }

  render(elkNode: ElkNode, propsMap: RenderPropsMap) {
    const vNodes = new SvgRenderer(propsMap).render(elkNode);
    this.domPatcher.patch(this.svgContainer.render(vNodes));
  }
}
