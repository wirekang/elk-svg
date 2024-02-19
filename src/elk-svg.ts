import { ElkNode } from "elkjs";
import { DomPatcher } from "./dom-patcher.js";
import { RenderPropsMap } from "./typings.js";
import { SvgRenderer } from "./svg-renderer.js";
import { h } from "snabbdom";

export class ElkSvg {
  private readonly domPatcher: DomPatcher;
  private readonly viewBox = { x: 0, y: 0, w: 600, h: 500 };

  constructor(container: HTMLElement) {
    this.domPatcher = new DomPatcher(container);
  }

  setViewBox(x: number, y: number, w: number, h: number) {
    this.viewBox.x = x;
    this.viewBox.y = y;
    this.viewBox.w = w;
    this.viewBox.h = h;
  }

  getViewBox(): { x: number; y: number; w: number; h: number } {
    return { ...this.viewBox };
  }

  render(elkNode: ElkNode, propsMap: RenderPropsMap) {
    const vNodes = new SvgRenderer(propsMap).render(elkNode);
    const container = this.makeContainer(vNodes);
    this.domPatcher.patch(container);
  }

  private makeContainer(children: any) {
    return h(
      "svg",
      {
        key: "container",
        attrs: {
          viewBox: `${this.viewBox.x} ${this.viewBox.y} ${this.viewBox.w} ${this.viewBox.h}`,
        },
      },
      children,
    );
  }
}
