import type { Point, Shape } from "../../types";
import { attr, svg } from "../../utils";
import { PathWriterImpl } from "../path-writer";
import type { FlatEdge, FlatNode, FlatPort, FlatResult, Middleware } from "../types";
import { getShape } from "./utils";

const svgRoot = svg("svg");
const svgPath = svg("path");
svgRoot.style.position = "fixed";
svgRoot.style.left = "0";
svgRoot.style.top = "0";
svgRoot.style.width = "0";
svgRoot.style.height = "0";
svgRoot.style.stroke = "black";
svgRoot.style.fill = "red";
svgRoot.append(svgPath);
document.body.append(svgRoot);
const inputPoint = svg("rect");
const outputPoint = svg("rect");
svgRoot.append(inputPoint, outputPoint);
attr(inputPoint, "width", 10);
attr(inputPoint, "height", 10);
inputPoint.style.fill = "blue";
attr(outputPoint, "width", 10);
attr(outputPoint, "height", 10);
outputPoint.style.fill = "yellow";

export class SticNode implements Middleware {
  constructor(
    private readonly shapes: Record<string, Shape>,
    private readonly pw: PathWriterImpl,
  ) {}

  public run(f: FlatResult) {
    for (const node of f.nodes) {
      this.doNode(
        node,
        f.ports.filter((p) => p.parentId === node.id),
        f.edges.filter((p) => p.targets.includes(node.id) || p.sources.includes(node.id)),
      );
    }
  }

  private doNode(node: FlatNode, ports: FlatPort[], edges: FlatEdge[]) {
    const shape = getShape(node.svg.shape, this.shapes);
    if (!shape || (ports.length === 0 && edges.length === 0)) {
      return;
    }
    this.pw.before();
    shape.path({ w: node.width, h: node.height }, this.pw);
    const pathData = this.pw.flush();
    svgPath.setAttribute("d", pathData);
    for (const edge of edges) {
      const section = edge.sections[0];
      const startDirection = section.incomingShape === node.id;

      const endPoint = startDirection ? section.startPoint : section.endPoint;

      const prev = { ...endPoint };
      const relX = endPoint.x - node.x;
      const relY = endPoint.y - node.y;

      const c = closestPoint(svgPath, { x: relX, y: relY });
      //   transform(inputPoint, { translate: { x: relX, y: relY } });
      //   transform(outputPoint, { translate: c });
      if (c.distance < 8) {
        continue;
      }
      endPoint.x = node.x + c.x;
      endPoint.y = node.y + c.y;
      if (section.bendPoints) {
        if (startDirection) {
          section.bendPoints?.unshift({ ...prev });
        } else {
          section.bendPoints?.push({ ...prev });
        }
      } else {
        section.bendPoints = [{ ...prev }];
      }
    }
    // todo port
  }
}

// https://gist.github.com/mbostock/8027637
function closestPoint(
  pathNode: SVGPathElement,
  point: Point,
): Point & { distance: number } {
  const pathLength = pathNode.getTotalLength();
  let precision = 8;
  let best: any;
  let bestLength = Infinity;
  let bestDistance = Infinity;

  // linear scan for coarse approximation
  for (
    let scan, scanLength = 0, scanDistance;
    scanLength <= pathLength;
    scanLength += precision
  ) {
    scanDistance = d2((scan = pathNode.getPointAtLength(scanLength)));
    if (scanDistance < bestDistance) {
      best = scan;
      bestLength = scanLength;
      bestDistance = scanDistance;
    }
  }

  // binary search for precise estimate
  precision /= 2;
  while (precision >= 0.5) {
    let before, after, beforeLength, afterLength, beforeDistance, afterDistance;
    if (
      (beforeLength = bestLength - precision) >= 0 &&
      (beforeDistance = d2((before = pathNode.getPointAtLength(beforeLength)))) <
        bestDistance
    ) {
      best = before;
      bestLength = beforeLength;
      bestDistance = beforeDistance;
    } else if (
      (afterLength = bestLength + precision) <= pathLength &&
      (afterDistance = d2((after = pathNode.getPointAtLength(afterLength)))) <
        bestDistance
    ) {
      best = after;
      bestLength = afterLength;
      bestDistance = afterDistance;
    } else {
      precision /= 2;
    }
  }

  return {
    x: best.x,
    y: best.y,
    distance: Math.sqrt(bestDistance),
  };

  function d2(p: { x: number; y: number }) {
    const dx = p.x - point.x,
      dy = p.y - point.y;
    const r = dx * dx + dy * dy;
    return r;
  }
}
