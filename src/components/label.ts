import type { ElkLabel } from "../elk-types";
import { svg } from "../utils";
import type { Component } from "./types";

export const labelComponent: Component<ElkLabel> = {
  name: "label",
  validate: (ee: any) => {
    return true;
  },

  key: (ee, data) => {
    return "_";
  },

  render: (ctx, ee, data) => {
    if (ee.text === undefined) {
      return null;
    }
    const t = svg("text");
    t.textContent = ee.text;
    return t;
  },
};
