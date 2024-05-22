import type { Attrnames, Classnames, Logger, NodeShapeFunction } from "./types";
import { svg } from "./utils";

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

const rect: NodeShapeFunction = (node) => {
  const e = svg("rect");
  e.setAttribute("width", node.width!.toString());
  e.setAttribute("height", node.height!.toString());
  return e;
};

const ellipse: NodeShapeFunction = (node) => {
  const e = svg("ellipse");
  e.setAttribute("cx", (node.width / 2).toString());
  e.setAttribute("cy", (node.height / 2).toString());
  e.setAttribute("rx", (node.width / 2).toString());
  e.setAttribute("ry", (node.height / 2).toString());
  return e;
};

const circle: NodeShapeFunction = (node, logger) => {
  if (Math.abs(node.width - node.height) > 20) {
    logger.warn(`drawing circle in non-square area: ${node.width},${node.height}`);
  }
  const e = svg("circle");
  const r = (node.height > node.width ? node.width : node.height) / 2;
  e.setAttribute("cx", (node.width / 2).toString());
  e.setAttribute("cy", (node.height / 2).toString());
  e.setAttribute("r", r.toString());
  return e;
};

const diamond: NodeShapeFunction = (node) => {
  const e = svg("polygon");
  e.setAttribute(
    "points",
    `${node.width / 2} 0,${node.width} ${node.height / 2},${node.width / 2} ${node.height},0 ${node.height / 2}`,
  );
  return e;
};

const roundRect: NodeShapeFunction = (node) => {
  const r = node.svg?.radius ?? Math.min(node.width / 3, node.height / 3, 30);
  const e = svg("rect");
  e.setAttribute("width", node.width!.toString());
  e.setAttribute("height", node.height!.toString());
  e.setAttribute("rx", r.toString());
  return e;
};

export const defaultNodeShapeFunctions = {
  rect,
  circle,
  ellipse,
  diamond,
  "round-rect": roundRect,
};
