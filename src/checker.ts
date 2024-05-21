export enum Check {
  new,
  changed,
  unchanged,
}

export class Checker<K extends keyof any, V> {
  private readonly m: Map<K, V>;
  constructor() {
    this.m = new Map();
  }

  public reset(key: K) {
    this.m.delete(key);
  }

  public check(key: K, value: V): Check {
    if (this.m.has(key)) {
      const previous = this.m.get(key);
      this.m.set(key, value);
      if (previous !== value) {
        return Check.changed;
      }
      return Check.unchanged;
    }
    this.m.set(key, value);
    return Check.new;
  }
}
