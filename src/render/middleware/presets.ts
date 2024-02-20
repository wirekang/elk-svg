import { classNameMiddleware } from "./class-name-middleware.js";
import { hiddenMiddleware } from "./hidden-middleware.js";
import { idToKeyMiddleware } from "./id-to-key-middleware.js";
import { shapeCircleMiddleware } from "./shape-circle-middleware.js";
import { shapeRectMiddleware } from "./shape-rect-middleware.js";
import { unitMiddleware } from "./unit-middleware.js";

export const COMMON_HEAD_MIDDLEWARES = [
  idToKeyMiddleware,
  classNameMiddleware,
  hiddenMiddleware,
];
export const SHAPE_MIDDLEWARES = [shapeCircleMiddleware, shapeRectMiddleware];
export const COMMON_TAIL_MIDDLEWARES = [unitMiddleware];
