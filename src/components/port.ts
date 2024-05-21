import type { ElkPort } from "../elk-types";
import { svg } from "../utils";
import type { Component } from "./types";

export const portComponent: Component<ElkPort> = {
  name: "port",
  validate: (ee: any) => {
    return ee.width !== undefined && ee.height !== undefined;
  },

  key: (ee, data): string => {
    return "_";
  },

  render: (ctx, ee, data) => {
    const r = svg("rect");
    r.setAttribute("width", ee.width!.toString());
    r.setAttribute("height", ee.height!.toString());
    return r;
  },
};
