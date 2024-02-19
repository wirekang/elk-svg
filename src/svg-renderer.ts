import { ElkExtendedEdge, ElkNode } from "elkjs";
import { RenderProps, RenderPropsMap } from "./typings.js";
import { VNode, h } from "snabbdom";

export class SvgRenderer {
  constructor(private readonly propsMap: RenderPropsMap) {}

  render(elkNode: ElkNode): VNode[] {
    const node = this.renderNode(elkNode);
    const edges = (elkNode.edges ?? []).map((it) => this.renderEdge(it));
    const nodes = [node, ...edges];
    (elkNode.children ?? [])
      .map((it) => this.render(it))
      .forEach((it) => nodes.push(...it));

    return nodes;
  }

  private renderNode(node: ElkNode): VNode {
    const props = this.getProps(node.id);
    const children = [] as VNode[];
    if (props.hidden !== true) {
      const shape = h("rect", {
        key: "shape",
        attrs: {
          x: px(node.x),
          y: px(node.y),
          width: px(node.width),
          height: px(node.height),
          stroke: "black",
          "stroke-width": px(1),
          fill: props.fill ?? "yellow",
        },
      });
      children.push(shape);
    }
    return h("g", { key: groupKey(node.id), attrs: {} }, children);
  }

  private renderEdge(edge: ElkExtendedEdge): VNode {
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

  private getProps(id: string): RenderProps {
    const prop = this.propsMap[id];
    return prop ?? {};
  }
}

function px(v: number | undefined) {
  let n = v;
  if (v === undefined) {
    n = 0;
  }
  return `${n}px`;
}

function groupKey(id: string) {
  return `g-${id}`;
}
