import type { ElkEdge } from "../elk-types";
import { svg } from "../utils";
import type { Component } from "./types";

export const edgeComponent: Component<ElkEdge> = {
  name: "edge",
  validate: (ee: any) => {
    return ee.sections !== undefined;
  },

  key: (ee, data): string => {
    return "_";
  },

  render: (ctx, ee, data) => {
    const paths: string[] = [];
    ee.sections!.forEach((e) => {
      paths.push(`M ${e.startPoint.x},${e.startPoint.y}`);
      e.bendPoints?.forEach(({ x, y }) => {
        paths.push(`L ${x},${y}`);
      });
      paths.push(`L ${e.endPoint.x},${e.endPoint.y}`);
    });
    const p = svg("path");
    p.setAttribute("d", paths.join(" "));
    return p;
  },
};
