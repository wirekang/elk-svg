import { ElkSvgLabel, ElkSvgNode } from "../../typings.js";
import {
  COMMON_HEAD_MIDDLEWARES,
  COMMON_TAIL_MIDDLEWARES,
} from "../middleware/presets.js";
import { RenderMiddleware } from "../middleware/render-middleware.js";
import { textMiddleware } from "../middleware/text-middleware.js";
import { RenderModule } from "./render-module.js";

export class EdgeLabelModule extends RenderModule<ElkSvgLabel> {
  protected override middlewares: RenderMiddleware<ElkSvgLabel>[] = [
    ...COMMON_HEAD_MIDDLEWARES,
    textMiddleware,
    ...COMMON_TAIL_MIDDLEWARES,
  ];
  override pickInput(node: ElkSvgNode): ElkSvgLabel[] {
    const labels = [] as ElkSvgLabel[];
    (node.edges ?? []).forEach((it) => {
      labels.push(...(it.labels ?? []));
    });
    return labels;
  }
}
