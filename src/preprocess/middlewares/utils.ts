import type { Shape } from "../../types";

export function getShape(v: string | null | undefined, shapes: Record<string, Shape>) {
  if (!v) {
    return null;
  }
  const shape = shapes[v];
  if (!shape) {
    throw new Error(`unknown shape: '${v}'`);
  }
  return shape;
}
