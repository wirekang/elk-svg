import { ElkSvgNode } from "../../typings.js";
import { RenderMiddleware } from "../middleware/render-middleware.js";
import { RenderOutput } from "../typings.js";

export abstract class RenderModule<TInput> {
  protected abstract middlewares: RenderMiddleware<TInput>[];
  protected abstract pickInput(node: ElkSvgNode): TInput[];

  render(node: ElkSvgNode): RenderOutput[] {
    return this.pickInput(node).map((it) => this.render_(node, it));
  }

  private render_(node: ElkSvgNode, input: TInput): RenderOutput {
    const output: RenderOutput = {
      sel: "--undefined--",
      attrs: {},
      children: [],
    };
    for (let i = 0; i < this.middlewares.length; i += 1) {
      const m = this.middlewares[i];
      if (m({ node, input, output }) === false) {
        break;
      }
    }
    if (output.sel === "--undefined--") {
      throw new Error("sel undefined");
    }
    return output;
  }
}
