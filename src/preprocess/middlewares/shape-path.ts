import type { FlatEdge, FlatNode, FlatPort } from "../../flat-types";
import type { Point, Shape } from "../../types";
import { distance, formatPath, pointsToPath, rtod, trw } from "../../utils";
import type { FlatResult, Middleware } from "../types";

export class ShapePath implements Middleware {
  constructor(private readonly shapes: Record<string, Shape>) {}

  public run(f: FlatResult) {
    for (const node of f.nodes) {
      this.box(node);
    }
    for (const port of f.ports) {
      this.box(port);
    }
    for (const edge of f.edges) {
      this.edge(edge);
    }
  }

  private box(element: FlatNode | FlatPort) {
    if (!element.svg.shape) {
      return;
    }
    const shape = this.shapes[element.svg.shape];
    if (!shape) {
      trw(Error, "invalid shape", { element });
    }
    const output = shape({ width: element.width, height: element.height });
    element.shapePath = formatPath(output);
  }

  private edge(element: FlatEdge) {
    if (element.sections.length !== 1) {
      throw new Error(`TODO: handle more than one sections: ${element.sections}`);
    }
    const section = element.sections[0];
    const points: Point[] = [];

    points.push(section.startPoint);
    section.bendPoints?.forEach((bend) => {
      points.push(bend);
    });
    points.push(section.endPoint);

    const pathDiff = {
      x: points[points.length - 1].x - points[points.length - 2].x,
      y: points[points.length - 1].y - points[points.length - 2].y,
    };
    const pathRadian = Math.atan2(pathDiff.y, pathDiff.x);

    const arrow = element.svg.arrow;
    if (arrow) {
      const lastPoint = element.sections[element.sections.length - 1].endPoint;
      const shape = this.shapes[arrow.shape];
      if (!shape) {
        trw(Error, "invalid arrowShape", { element });
      }

      const output = shape({
        width: arrow.size,
        height: arrow.size,
      });

      const arrowCenter = distance(
        lastPoint,
        -arrow.size / 2 - arrow.thickness,
        pathRadian,
      );
      const arrowStart = distance(lastPoint, -arrow.size - arrow.thickness, pathRadian);
      section.endPoint.x = arrowStart.x;
      section.endPoint.y = arrowStart.y;
      element.arrow = {
        x: arrowCenter.x - arrow.size / 2,
        y: arrowCenter.y - arrow.size / 2,
        angle: rtod(pathRadian) + 90,
        path: formatPath(output),
      };
      element.linePath = pointsToPath(points);
    }
  }
}
