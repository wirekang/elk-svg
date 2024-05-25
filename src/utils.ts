import type { Point } from "./types";

export function ntos(v: number | undefined | null | false, suffix = "") {
  if (v === undefined || v === null || v === false) {
    return "0" + suffix;
  }
  return `${v}${suffix}`;
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

// https://github.com/epoberezkin/fast-deep-equal
export function deepEqual(a: any, b: any) {
  if (a === b) return true;

  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!deepEqual(a[i], b[i])) return false;
      return true;
    }

    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0; ) {
      var key = keys[i];

      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
}
