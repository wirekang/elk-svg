import type { Point, Shape } from "../../types";
import { distance, pointsToPath, rtod, trw } from "../../utils";
import type { PathWriterImpl } from "../path-writer";
import type { FlatEdge, FlatNode, FlatPort, FlatResult, Middleware } from "../types";
import { getShape } from "./utils";

export class GenPath implements Middleware {
  constructor(
    private readonly shapes: Record<string, Shape>,
    private readonly pw: PathWriterImpl,
  ) {}

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
    const shape = getShape(element.svg.shape, this.shapes);
    if (!shape) {
      return;
    }
    shape.path({ w: element.width, h: element.height }, this.pw);
    element.shapePath = this.pw.flush();
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
      const shape = getShape(element.svg.arrow?.shape, this.shapes);
      if (!shape) {
        trw(Error, "invalid arrowShape", { element });
      }

      shape.path({ w: arrow.size, h: arrow.size }, this.pw);

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
        path: this.pw.flush(),
      };
      element.linePath = pointsToPath(points);
    }
  }
}
