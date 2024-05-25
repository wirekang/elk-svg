import type { Shape } from "./types";

const rectangle: Shape = ({ width: w, height: h }) => ({
  path: [["M", 0, 0], ["L", w, 0], ["L", w, h], ["L", 0, h], ["z"]],
});

const ellipse: Shape = ({ width: w, height: h }) => ({
  path: [["M", w / 2, h / 2], ["a", w / 2, h / 2, 0, 1, 0, 1, 0], ["z"]],
});

const diamond: Shape = ({ width: w, height: h }) => ({
  path: [["M", 0, h / 2], ["L", w / 2, 0], ["L", w, h / 2], ["L", w / 2, h], ["z"]],
});

const arrowNormal: Shape = ({ width: w, height: h }) => ({
  path: [["M", 0, h], ["L", w, h], ["L", w / 2, 0], ["z"]],
});

export const defaultShapes: Record<string, Shape> = {
  rectangle,
  ellipse,
  diamond,
  "arrow-normal": arrowNormal,
};
