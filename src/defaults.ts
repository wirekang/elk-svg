import type { Classnames, Logger } from "./types";
import * as nodeShape from "./node-shape";
import * as edgeArrow from "./edge-arrow";

export const defaultClassnames: Classnames = {
  topLevelGroup: "elk-svg-top-level-group",
  group: "elk-svg-group",

  nodeGroup: "elk-svg-node-group",
  nodeComponent: "elk-svg-node-component",

  edgeGroup: "elk-svg-edge-group",
  edgeComponent: "elk-svg-edge-component",
  edgeLine: "elk-svg-edge-line",
  edgeArrow: "elk-svg-edge-arrow",

  portGroup: "elk-svg-port-group",
  portComponent: "elk-svg-port-component",

  labelGroup: "elk-svg-label-group",
  labelComponent: "elk-svg-label-component",
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

export const defaultNodeShapeFunctions = {
  rect: nodeShape.rect,
  circle: nodeShape.circle,
  ellipse: nodeShape.ellipse,
  diamond: nodeShape.diamond,
  "round-rect": nodeShape.roundRect,
};

export const defaultEdgeArrowFunctions = {
  normal: edgeArrow.normal,
};
