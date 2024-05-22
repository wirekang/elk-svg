import type { NodeShapeFunction } from "./types";
import { svg } from "./utils";

export const rect: NodeShapeFunction = (ctx, node) => {
  const e = svg("rect");
  e.setAttribute("width", node.width!.toString());
  e.setAttribute("height", node.height!.toString());
  return e;
};

export const ellipse: NodeShapeFunction = (ctx, node) => {
  const e = svg("ellipse");
  e.setAttribute("cx", (node.width / 2).toString());
  e.setAttribute("cy", (node.height / 2).toString());
  e.setAttribute("rx", (node.width / 2).toString());
  e.setAttribute("ry", (node.height / 2).toString());
  return e;
};

export const circle: NodeShapeFunction = (ctx, node) => {
  if (Math.abs(node.width - node.height) > 20) {
    ctx.logger.warn(`drawing circle in non-square area: ${node.width},${node.height}`);
  }
  const e = svg("circle");
  const r = (node.height > node.width ? node.width : node.height) / 2;
  e.setAttribute("cx", (node.width / 2).toString());
  e.setAttribute("cy", (node.height / 2).toString());
  e.setAttribute("r", r.toString());
  return e;
};

export const diamond: NodeShapeFunction = (ctx, node) => {
  const e = svg("polygon");
  e.setAttribute(
    "points",
    `${node.width / 2} 0,${node.width} ${node.height / 2},${node.width / 2} ${node.height},0 ${node.height / 2}`,
  );
  return e;
};

export const roundRect: NodeShapeFunction = (ctx, node) => {
  const r = node.svg?.radius ?? Math.min(node.width / 3, node.height / 3, 30);
  const e = svg("rect");
  e.setAttribute("width", node.width!.toString());
  e.setAttribute("height", node.height!.toString());
  e.setAttribute("rx", r.toString());
  return e;
};
