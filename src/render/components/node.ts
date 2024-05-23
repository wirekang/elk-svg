import { attr, svg } from "../../utils";
import type { Component } from "../types";

export const nodeComponent: Component<"node"> = {
  key: function (ctx) {
    return [ctx.element.shapePath];
  },
  render: function (ctx) {
    const g = svg("g");
    if (!ctx.element.shapePath) {
      return g;
    }
    const path = svg("path");
    attr(path, "d", ctx.element.shapePath);
    return path;
  },
};
