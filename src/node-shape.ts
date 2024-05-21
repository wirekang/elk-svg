import type { NodeShapeFunction } from "./types";
import { svg } from "./utils";

const rect: NodeShapeFunction = (node) => {
  const r = svg("rect");
  r.setAttribute("width", node.width!.toString());
  r.setAttribute("height", node.height!.toString());
  return r;
};

export const NODE_SHAPE_FUNCTIONS = { rect };
