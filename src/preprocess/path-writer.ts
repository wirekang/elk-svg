import type { PathWriter } from "../types";

export class PathWriterImpl implements PathWriter {
  private result: string = "";

  ____________________________________________________________________________(): PathWriter {
    return this;
  }

  before() {
    if (this.result.length > 0) {
      throw new Error("PathWriter.before: not empty");
    }
  }

  flush() {
    const r = this.result;
    this.result = "";
    return r;
  }

  private write(cmd: string, ...args: any[]) {
    if (this.result.length > 0) {
      this.result += " ";
    }
    this.result += cmd + " " + args.join(",");
    return this;
  }

  M = this.write.bind(this, "M");
  m = this.write.bind(this, "m");
  L = this.write.bind(this, "L");
  l = this.write.bind(this, "l");
  H = this.write.bind(this, "H");
  h = this.write.bind(this, "h");
  V = this.write.bind(this, "V");
  v = this.write.bind(this, "v");
  C = this.write.bind(this, "C");
  c = this.write.bind(this, "c");
  S = this.write.bind(this, "S");
  s = this.write.bind(this, "s");
  Q = this.write.bind(this, "Q");
  q = this.write.bind(this, "q");
  T = this.write.bind(this, "T");
  t = this.write.bind(this, "t");
  A = this.write.bind(this, "A");
  a = this.write.bind(this, "a");
  Z = this.write.bind(this, "Z");
  z = this.write.bind(this, "z");
}
