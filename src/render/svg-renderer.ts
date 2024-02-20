import { VNode, h } from "snabbdom";
import { NodeBodyModule } from "./module/node-body-module.js";
import { RenderModule } from "./module/render-module.js";
import { RenderOutput } from "./typings.js";
import { ElkSvgEdge, ElkSvgNode } from "../typings.js";
import { NodeLabelModule } from "./module/node-label-module.js";
import { EdgeLineModule } from "./module/edge-line-module.js";
import { EdgeLabelModule } from "./module/edge-label-module.js";

export class SvgRenderer {
  private modules: RenderModule<any>[] = [
    new NodeBodyModule(),
    new NodeLabelModule(),
    new EdgeLineModule(),
    new EdgeLabelModule(),
  ];
  constructor() {}

  render(node: ElkSvgNode): VNode[] {
    const start = Date.now();
    const outputs = this.renderRecursive(node);
    console.log(Date.now() - start);
    return outputs.map((it) =>
      h(it.sel, { key: it.key, attrs: it.attrs }, it.children),
    );
  }

  private renderRecursive(node: ElkSvgNode): RenderOutput[] {
    const renderOutputs = [] as RenderOutput[];
    this.modules.forEach((module) => {
      renderOutputs.push(...module.render(node));
    });
    (node.children ?? []).forEach((it) =>
      renderOutputs.push(...this.renderRecursive(it)),
    );
    return renderOutputs;
  }

  private renderEdge(edge: ElkSvgEdge): VNode {
    const points = [] as string[];

    edge.sections!.forEach((section) => {
      points.push(`${section.startPoint.x},${section.startPoint.y}`);
      (section.bendPoints ?? []).forEach((it) => {
        points.push(`${it.x},${it.y}`);
      });
      points.push(`${section.endPoint.x},${section.endPoint.y}`);
    });
    return h(
      "g",
      {
        key: groupKey(edge.id),
      },
      [
        h("polyline", {
          key: "polyline",
          attrs: {
            fill: "none",
            stroke: "black",
            "stroke-width": px(1),
            points: points.join(" "),
          },
        }),
      ],
    );
  }
}

function px(v: number | undefined) {
  let n = v;
  if (v === undefined) {
    n = 0;
  }
  return `${n}px`;
}

function groupKey(...args: any[]): any {}
