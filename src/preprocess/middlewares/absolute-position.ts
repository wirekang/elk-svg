import type { FlatResult, Middleware } from "../types";
import type { FlatElement } from "../../flat-types";

export class AbsolutePosition implements Middleware {
  private readonly marking = new Set<string>();

  public run(f: FlatResult) {
    for (const e of f.all) {
      this.recursive(e, f.ref);
    }
  }

  private recursive(e: FlatElement, ref: FlatResult["ref"]) {
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
    e.x += parent.r.x;
    e.y += parent.r.y;
    this.marking.add(e.id);
  }
}
