import { RenderModule } from "./render-module.js";
import {
  COMMON_HEAD_MIDDLEWARES,
  COMMON_TAIL_MIDDLEWARES,
  SHAPE_MIDDLEWARES,
} from "../middleware/presets.js";
import { ElkSvgNode } from "../../typings.js";

export class NodeBodyModule extends RenderModule<ElkSvgNode> {
  protected override middlewares = [
    ...COMMON_HEAD_MIDDLEWARES,
    ...SHAPE_MIDDLEWARES,
    ...COMMON_TAIL_MIDDLEWARES,
  ];

  protected override pickInput(node: ElkSvgNode): ElkSvgNode[] {
    return [node];
  }
}
