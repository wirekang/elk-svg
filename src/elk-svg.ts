import { ElkNode } from "elkjs";
import { DomPatcher } from "./dom-patcher.js";
import { RenderPropsMap } from "./typings.js";
import { SvgRenderer } from "./svg-renderer.js";
import { h } from "snabbdom";

export class ElkSvg {
  private readonly domPatcher: DomPatcher;
  private readonly viewBox = { x: 0, y: 0, w: 600, h: 500 };
  private readonly svgId = `elk-svg-${Date.now()}`;
  private svg: Element | null = null;

  constructor(container: HTMLElement) {
    this.domPatcher = new DomPatcher(container);
  }

  setViewBox(x: number, y: number, w: number, h: number) {
    this.viewBox.x = x;
    this.viewBox.y = y;
    this.viewBox.w = w;
    this.viewBox.h = h;
    this.svg?.setAttribute("viewBox", this.viewBoxString());
  }

  getViewBox(): { x: number; y: number; w: number; h: number } {
    return { ...this.viewBox };
  }

  render(elkNode: ElkNode, propsMap: RenderPropsMap) {
    const vNodes = new SvgRenderer(propsMap).render(elkNode);
    const svg = this.makeSvg(vNodes);
    this.domPatcher.patch(svg);
    this.svg = document.getElementById(this.svgId);
  }

  private makeSvg(children: any) {
    return h(
      "svg",
      {
        key: "elk-svg",
        attrs: {
          id: this.svgId,
          viewBox: this.viewBoxString(),
        },
      },
      children,
    );
  }

  private viewBoxString() {
    return `${this.viewBox.x} ${this.viewBox.y} ${this.viewBox.w} ${this.viewBox.h}`;
  }
}
