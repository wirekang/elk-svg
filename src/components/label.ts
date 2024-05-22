import type { ElkSvgLabel } from "../types";
import { svg } from "../utils";
import type { Component } from "./types";

export const labelComponent: Component<ElkSvgLabel> = {
  name: "label",
  validate: (ee: any) => {
    return true;
  },

  key: (ee) => {
    return `${ee.text}`;
  },

  render: (ctx, ee) => {
    if (ee.text === undefined) {
      return null;
    }
    const t = svg("text");
    t.textContent = ee.text;
    return t;
  },
};
