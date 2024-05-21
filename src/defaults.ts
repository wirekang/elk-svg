import type { Attrnames, Classnames, Logger } from "./types";

export const defaultClassnames: Classnames = {
  topLevelGroup: "elk-svg-top-level-group",
  group: "elk-svg-group",
  nodeGroup: "elk-svg-node-group",
  nodeComponent: "elk-svg-node-shape",
  edgeGroup: "elk-svg-edge-group",
  edgeComponent: "elk-svg-edge-component",
  portGroup: "elk-svg-port-group",
  portComponent: "elk-svg-port-component",
  labelGroup: "elk-svg-label-group",
  labelComponent: "elk-svg-label-component",
};

export const defaultAttrnames: Attrnames = {
  id: "data-elk-svg-id",
};

export const defaultLogger: Logger = {
  debug: (...args: any[]): void => {
    console.debug("[elk-svg]", ...args);
  },
  info: function (...args: any[]): void {
    console.info("[elk-svg]", ...args);
  },
  warn: function (...args: any[]): void {
    console.warn("[elk-svg]", ...args);
  },
  error: function (...args: any[]): void {
    console.error("[elk-svg]", ...args);
  },
};
