import { attr, svg } from "../../utils";
import type { Component } from "../types";

export const portComponent: Component<"port"> = {
  key: function (ctx) {
    return [ctx.element.shapePath];
  },
  render: function (ctx) {
    if (!ctx.element.shapePath) {
      return svg("g");
    }
    const path = svg("path");
    attr(path, "d", ctx.element.shapePath);
    return path;
  },
};
