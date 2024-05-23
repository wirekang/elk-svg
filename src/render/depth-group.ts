import { attr, svg } from "../utils";

export class DepthGroup {
  private readonly groups: SVGGElement[] = [];
  private readonly container;

  constructor(classname: string, parent: Element) {
    this.container = svg("g");
    this.container.classList.add(classname);
    parent.append(this.container);
  }

  public get(i: number) {
    while (this.groups.length <= i) {
      const g = svg("g");
      this.groups.push(g);
      this.container.append(g);
      attr(g, "data-depth", this.groups.length - 1);
    }
    return this.groups[i];
  }
}
