import type { ElkSvgPort } from "../types";
import { svg } from "../utils";
import type { Component } from "./types";

export const portComponent: Component<ElkSvgPort> = {
  name: "port",
  validate: (ee: any) => {
    return ee.width !== undefined && ee.height !== undefined;
  },

  key: (ee): string => {
    return "_";
  },

  render: (ctx, ee) => {
    const r = svg("rect");
    r.setAttribute("width", ee.width!.toString());
    r.setAttribute("height", ee.height!.toString());
    return r;
  },
};
