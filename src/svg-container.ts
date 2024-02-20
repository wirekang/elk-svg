import { VNode, h } from "snabbdom";

export class SvgContainer {
  private readonly viewBox: ViewBox = { x: 0, y: 0, w: 0, h: 0 };

  getViewBox(): ViewBox {
    return { ...this.viewBox };
  }

  setViewBox(v: ViewBox) {
    this.viewBox.x = v.x;
    this.viewBox.y = v.y;
    this.viewBox.w = v.w;
    this.viewBox.h = v.h;
  }

  render(children: VNode[]): VNode {
    return h(
      "svg",
      {
        attrs: {
          viewBox: this.viewBoxString(),
        },
      },
      [...children],
    );
  }

  private viewBoxString() {
    return `${this.viewBox.x} ${this.viewBox.y} ${this.viewBox.w} ${this.viewBox.h}`;
  }
}

export type ViewBox = {
  x: number;
  y: number;
  w: number;
  h: number;
};
