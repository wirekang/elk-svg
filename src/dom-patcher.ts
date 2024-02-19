import { VNode, attributesModule, init, toVNode } from "snabbdom";

export class DomPatcher {
  private readonly snabb: (e: VNode, v: VNode) => VNode;
  private last: VNode;

  constructor(private readonly container: HTMLElement) {
    this.last = toVNode(container);
    this.last.key = "container";
    this.snabb = init([attributesModule]);
  }

  patch(vNode: VNode) {
    this.last = this.snabb(this.last, { ...this.last, children: [vNode] });
  }
}
