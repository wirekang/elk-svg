export class DomRef {
  private readonly m: Map<string, Element> = new Map();

  constructor(private readonly name: string) {}

  public set(id: string, v: Element) {
    this.m.set(id, v);
  }

  public get(id: string): Element {
    const de = this.m.get(id);
    if (de === undefined) {
      throw new Error(`no element: reg='${this.name}' id='${id}'`);
    }
    return de;
  }

  public getOrNull(id: string): Element | null {
    return this.m.get(id) ?? null;
  }

  public unset(id: string) {
    this.m.delete(id);
  }

  public delete(id: string) {
    const de = this.m.get(id);
    if (de) {
      de.remove();
    }
    this.m.delete(id);
  }

  public ids() {
    return new Set(this.m.keys());
  }
}
