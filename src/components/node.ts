import type { ElkSvgNode } from "../types";
import type { Component } from "./types";

export const nodeComponent: Component<ElkSvgNode> = {
  name: "node",
  validate: (ee: any) => {
    return ee.width !== undefined && ee.height !== undefined;
  },

  key: (ee): string => {
    return `${ee.svg?.shape}`;
  },

  render: (ctx, ee) => {
    const shape = ee.svg?.shape;
    if (!shape) {
      return null;
    }
    const f = ctx.nodeShapeFunctions[shape];
    if (!f) {
      ctx.logger.error(`no nodeShapeFunction for '${shape}'`);
      return null;
    }
    const de = f(ctx, ee as any);
    de.classList.add(ctx.classnames.nodeShape);
    return de;
  },
};
