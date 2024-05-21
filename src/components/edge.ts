import type { ElkEdge } from "../elk-types";
import type { Component } from "./types";

export const edgeComponent: Component<ElkEdge> = {
  name: "edge",
  validate: (ee: any) => {
    return ee.sections !== undefined;
  },

  key: (ee, data): string => {
    return "";
  },

  render: (ee, data) => {
    return null;
  },
};
