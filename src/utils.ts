import type { Point } from "./elk-types";
import type { ShapeOutput } from "./shape-types";

export function ntos(v: number | undefined | null | false, suffix = "") {
  if (v === undefined || v === null || v === false) {
    return "0" + suffix;
  }
  return `${v}${suffix}`;
}

export function n(v: undefined | null | string | number): number {
  if (!v) {
    return 0;
  }
  return typeof v === "number" ? v : parseFloat(v);
}

export function svg<K extends keyof SVGElementTagNameMap>(name: K) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

export function attr(e: Element, name: string, v: any) {
  if (v === null || v === undefined) {
    e.removeAttribute(name);
    return;
  }
  e.setAttribute(name, `${v}`);
}

export function transform(
  e: Element,
  t: {
    translate?: { x?: number; y?: number };
    rotate?: number | { a?: number; x?: number; y?: number };
  },
) {
  const r = [] as string[];

  const x = t.translate?.x;
  const y = t.translate?.y;
  if (x !== undefined || y !== undefined) {
    r.push(`translate(${ntos(x)} ${ntos(y)})`);
  }

  if (t.rotate) {
    const a = typeof t.rotate === "number" ? t.rotate : t.rotate.a;
    const x = typeof t.rotate === "object" && t.rotate.x;
    const y = typeof t.rotate === "object" && t.rotate.y;
    if (a) {
      if (x || y) {
        r.push(`rotate(${a} ${ntos(x)} ${ntos(y)})`);
      } else {
        r.push(`rotate(${a})`);
      }
    }
  }

  if (r.length === 0) {
    e.removeAttribute("transform");
    return;
  }
  e.setAttribute("transform", r.join(" "));
}

export function freezeMerge(...args: (object | null | undefined)[]) {
  const r = {};
  args.forEach((a) => {
    Object.assign(r, a);
  });
  return Object.freeze(r) as any;
}

export function elkVector(v: string): [number, number] {
  const arr = v.split(",");
  if (arr.length !== 2) {
    throw new Error(`invalid vector: ${v}`);
  }
  return arr.map(Number) as any;
}

export function mapPush<K, V>(m: Map<K, V[]>, k: K, v: V) {
  const arr = m.get(k);
  if (arr) {
    arr.push(v);
    return;
  }
  m.set(k, [v]);
}

export type Brand<K, T> = T & { __not_in_runtime: K };

export function trw(t: any, message: string, record?: any, cause?: any): never {
  throw new t(`${message}:\n${JSON.stringify(record, null, 2)}\n`, { cause });
}

export function formatPath({ path }: ShapeOutput) {
  if (typeof path === "string") {
    return path;
  }

  let result = "";
  for (const line of path) {
    result += " " + line[0] + " ";
    for (let i = 1; i < line.length; i += 1) {
      if (i !== 1) {
        result += ",";
      }
      result += line[i];
    }
  }
  return result.substring(1);
}

export function rtod(r: number) {
  return r * (180 / Math.PI);
}

export function distance(p: Point, dis: number, rad: number) {
  return {
    x: p.x + Math.cos(rad) * dis,
    y: p.y + Math.sin(rad) * dis,
  };
}

export function pointsToPath(p: Point[]) {
  return p
    .map(({ x, y }, i) => {
      if (i === 0) {
        return `M ${x},${y}`;
      }
      return `L ${x},${y}`;
    })
    .join(" ");
}
