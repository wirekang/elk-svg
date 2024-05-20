import jsdom from "jsdom";
import { initRender } from "../dist";
import prettier from "@prettier/sync";

export function initDom() {
  const dom = new jsdom.JSDOM(`<svg id="container"></svg>`, {
    url: "https://example.org/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
  });
  return dom;
}

/**
 *
 * @param {import("../dist").RenderProps} props
 * @param {(container:SVGElement,render:import("../dist").Render)=>void} cb
 */
export function testRender(props, cb) {
  const dom = initDom();
  const container = dom.window.document.getElementById("container");
  const render = initRender({
    container,
    document: dom.window.document,
    ...props,
  });
  try {
    cb(container, render);
  } catch (e) {
    const d = prettier.format(dom.serialize(), {
      printWidth: 80,
      parser: "html",
    });
    e.message = e.message + "\n" + d;
    throw e;
  }
}

/**
 *
 * @param {Element} e
 * @param {Record<string,string>} attrs
 */
export function expectAtrrs(e, attrs) {
  for (const [attr, value] of Object.entries(attrs)) {
    expect(e.getAttribute(attr)).toBe(value);
  }
}

/**
 *
 * @param {Element} e
 * @param {string} classes
 */
export function expectClasses(e, classes) {
  classes.split(" ").forEach((c) => {
    expect(Array.from(e.classList.values())).toContain(c);
  });
}
