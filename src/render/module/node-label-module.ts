import { ElkSvgLabel, ElkSvgNode } from "../../typings.js";
import {
  COMMON_HEAD_MIDDLEWARES,
  COMMON_TAIL_MIDDLEWARES,
} from "../middleware/presets.js";
import { relativePositionMiddleware } from "../middleware/relative-position-middleware.js";
import { RenderMiddleware } from "../middleware/render-middleware.js";
import { textMiddleware } from "../middleware/text-middleware.js";
import { RenderModule } from "./render-module.js";

export class NodeLabelModule extends RenderModule<ElkSvgLabel> {
  protected override middlewares: RenderMiddleware<ElkSvgLabel>[] = [
    ...COMMON_HEAD_MIDDLEWARES,
    textMiddleware,
    relativePositionMiddleware,
    ...COMMON_TAIL_MIDDLEWARES,
  ];
  override pickInput(node: ElkSvgNode): ElkSvgLabel[] {
    return node.labels ?? [];
  }
}
