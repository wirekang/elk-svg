import { attr, svg, transform } from "../../utils";
import type { Component } from "../types";

export const edgeComponent: Component<"edge"> = {
  key: function (ctx) {
    return [ctx.element.linePath, ctx.element.arrow];
  },
  render: function (ctx) {
    const g = svg("g");
    if (ctx.element.linePath) {
      const p = svg("path");
      attr(p, "d", ctx.element.linePath);
      p.classList.add(ctx.classnamer("edge-line"));
      g.append(p);
    }
    const arrow = ctx.element.arrow;
    if (arrow) {
      const p = svg("path");
      p.style.transformBox = "fill-box";
      p.style.transformOrigin = "center";
      attr(p, "d", arrow.path);
      transform(p, {
        translate: arrow,
        rotate: {
          a: arrow.angle,
        },
      });
      p.classList.add(ctx.classnamer("edge-arrow"));
      g.append(p);
    }
    return g;
  },
};
