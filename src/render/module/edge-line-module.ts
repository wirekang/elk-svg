import { ElkSvgEdge, ElkSvgNode } from "../../typings.js";
import { edgePolylineMiddleware } from "../middleware/edge-polyline-middleware.js";
import {
  COMMON_HEAD_MIDDLEWARES,
  COMMON_TAIL_MIDDLEWARES,
} from "../middleware/presets.js";
import { RenderMiddleware } from "../middleware/render-middleware.js";
import { RenderModule } from "./render-module.js";

export class EdgeLineModule extends RenderModule<ElkSvgEdge> {
  protected override middlewares: RenderMiddleware<ElkSvgEdge>[] = [
    ...COMMON_HEAD_MIDDLEWARES,
    edgePolylineMiddleware,
    ...COMMON_TAIL_MIDDLEWARES,
  ];
  protected override pickInput(node: ElkSvgNode): ElkSvgEdge[] {
    return node.edges ?? [];
  }
}
