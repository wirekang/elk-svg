import type { RenderElement } from "../../render-types";
import type { FlatResult, Middleware } from "../types";

export class AbsolutePosition implements Middleware {
  private readonly marking = new Set<string>();

  public run(f: FlatResult) {
    for (const e of f.all) {
      this.recursive(e, f.ref);
    }
    for (const edge of f.edges) {
      const ee = edge as any;
      for (const section of edge.sections) {
        section.startPoint.x += ee.x;
        section.startPoint.y += ee.y;
        section.endPoint.x += ee.x;
        section.endPoint.y += ee.y;
        section.bendPoints?.forEach((b) => {
          b.x += ee.x;
          b.y += ee.y;
        });
      }

      // now this edge shouldn't have a position.
      delete ee.x;
      delete ee.y;
    }
  }

  private recursive(e: RenderElement, ref: FlatResult["ref"]) {
    const ee = e as any;
    if (ee.x === undefined) {
      // this is edge, which has no position, but temporary set for calculate absolute position
      ee.x = 0;
      ee.y = 0;
    }
    if (this.marking.has(e.id)) {
      return;
    }

    if (e.parentId === null) {
      this.marking.add(e.id);
      return;
    }

    const parent = ref.get(e.parentId);
    if (!parent) {
      throw new Error("no parent: unreachable");
    }
    this.recursive(parent.r, ref);

    ee.x += (parent.r as any).x;
    ee.y += (parent.r as any).y;
    this.marking.add(e.id);
  }
}
