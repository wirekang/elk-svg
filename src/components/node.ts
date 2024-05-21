import type { ElkNode, LayoutedElkNode } from "../elk-types";
import type { Component } from "./types";

export const nodeComponent: Component<ElkNode> = {
  name: "node",
  validate: (ee: any) => {
    return (
      ee.width !== undefined &&
      ee.height !== undefined &&
      ee.x !== undefined &&
      ee.y !== undefined
    );
  },

  key: (ee, data): string => {
    return `${data.nodeShape}`;
  },

  render: (ctx, ee, data) => {
    if (data.nodeShape === undefined) {
      return null;
    }
    const f = ctx.nodeShapeFunctions[data.nodeShape];
    if (!f) {
      ctx.logger.error(`no nodeShapeFunction for '${data.nodeShape}'`);
      return null;
    }
    return f(ee as LayoutedElkNode);
  },
};
