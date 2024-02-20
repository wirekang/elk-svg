import { DomPatcher } from "./dom-patcher.js";
import { SvgRenderer } from "./render/svg-renderer.js";
import { SvgContainer } from "./svg-container.js";
import { ElkSvgNode } from "./typings.js";

export class ElkSvg {
  private readonly domPatcher: DomPatcher;
  private readonly svgContainer = new SvgContainer();
  private readonly svgRenderer = new SvgRenderer();

  constructor(container: HTMLElement) {
    this.domPatcher = new DomPatcher(container);
  }

  getSvgContainer(): SvgContainer {
    return this.svgContainer;
  }

  render(node: ElkSvgNode) {
    const vNodes = this.svgRenderer.render(node);
    this.domPatcher.patch(this.svgContainer.render(vNodes));
  }
}
