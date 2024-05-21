import type { LayoutedElkNode } from "./elk-types";
import { svg } from "./utils";

export type NodeShapeFunction = (node: LayoutedElkNode) => Element;

const rect: NodeShapeFunction = (node) => {
  const r = svg("rect");
  r.setAttribute("width", node.width.toString());
  r.setAttribute("height", node.height.toString());
  return r;
};

export const NODE_SHAPE_FUNCTIONS = { rect };
