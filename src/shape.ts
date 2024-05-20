import { n } from "./utils";

export type Shapes = Record<string, ShapeFunc>;

export type ShapeFunc = (size: ShapeSize, document: Document) => SVGElement;

export type ShapeSize = {
  width: number;
  height: number;
};

const rect: ShapeFunc = (size, doc) => {
  const r = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
  r.setAttribute("width", n(size.width));
  r.setAttribute("height", n(size.height));
  return r;
};

export const BUILT_IN_SHAPES: Shapes = {
  rect,
};
