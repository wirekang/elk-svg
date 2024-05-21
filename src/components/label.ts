import type { ElkLabel, ElkNode } from "../elk-types";
import type { Component } from "./types";

export const labelComponent: Component<ElkLabel> = {
  name: "label",
  validate: (ee: any) => {
    return ee.text !== undefined;
  },

  key: (ee, data) => {
    return "";
  },

  render: (ee, data) => {
    return null;
  },
};
