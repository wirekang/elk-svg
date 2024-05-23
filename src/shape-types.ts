export type Shape = (input: ShapeInput) => ShapeOutput;

export type ShapeInput = { width: number; height: number };
export type ShapeOutput = {
  path: [string, ...number[]][] | string;
};
