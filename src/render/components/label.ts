import { svg } from "../../utils";
import type { Component } from "../types";

export const labelComponent: Component<"label"> = {
  key: function (ctx) {
    return [ctx.element.text, ctx.element.width, ctx.element.height];
  },
  render: function (ctx) {
    const g = svg("g");
    const t = svg("text");
    t.textContent = ctx.element.text ?? "";
    g.append(t);
    return g;
  },
};
