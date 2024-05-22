import type { EdgeArrowFunction, ElkSvgEdge } from "../types";
import { svg, transform } from "../utils";
import type { Component } from "./types";

export const edgeComponent: Component<ElkSvgEdge> = {
  name: "edge",
  validate: (ee: any) => {
    return ee.sections !== undefined;
  },

  key: (ee): string => {
    return "_";
  },

  render: (ctx, ee) => {
    const arrowSize = ee.svg?.arrowSize ?? 8;
    const modifiedEe = structuredClone(ee);
    modifiedEe.svg = { ...modifiedEe.svg, arrowSize };

    const af = getArrowFunction(ctx, ee);
    const g = svg("g");
    const paths: string[] = [];
    ee.sections!.forEach((e) => {
      let lastX = e.startPoint.x;
      let lastY = e.startPoint.y;
      paths.push(`M ${e.startPoint.x},${e.startPoint.y}`);
      e.bendPoints?.forEach(({ x, y }) => {
        paths.push(`L ${x},${y}`);
        lastX = x;
        lastY = y;
      });
      if (af) {
        const angle = Math.atan2(lastY - e.endPoint.y, lastX - e.endPoint.x);
        const x = e.endPoint.x + arrowSize * Math.cos(angle);
        const y = e.endPoint.y + arrowSize * Math.sin(angle);

        const ae = af(ctx, modifiedEe);
        transform(ae, {
          translate: { x: x, y: y },
          rotate: { a: angle * (180 / Math.PI) },
        });
        ae.classList.add(ctx.classnames.edgeArrow);
        g.appendChild(ae);
        paths.push(`L ${x},${y}`);
      } else {
        paths.push(`L ${e.endPoint.x},${e.endPoint.y}`);
      }
    });
    const p = svg("path");
    p.setAttribute("d", paths.join(" "));
    p.classList.add(ctx.classnames.edgeLine);
    g.appendChild(p);

    return g;
  },
};

function getArrowFunction(ctx: any, ee: any): EdgeArrowFunction | null {
  const arrow = ee.svg?.arrow;
  if (!arrow) {
    return null;
  }
  const arrowFunction = ctx.edgeArrowFunctions[arrow];
  if (!arrowFunction) {
    ctx.logger.error(`no edgeArrowFunction for '${arrow}'`);
    return null;
  }
  return arrowFunction;
}
