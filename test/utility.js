import jsdom from "jsdom";
import { initRenderer } from "../dist";
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
 * @param {(renderer:import("../dist").Renderer,container:SVGElement)=>void} cb
 */
export function testRender(props, cb) {
  const dom = initDom();
  const container = dom.window.document.getElementById("container");
  const renderer = initRenderer({
    container,
    document: dom.window.document,
    ...props,
  });
  try {
    cb(renderer, container);
  } catch (e) {
    const d = prettier.format(dom.serialize(), {
      printWidth: 80,
      parser: "html",
    });
    console.log("=====================DOM:\n", d, "\n\n");
    throw e;
  }
}

export function testSingleRender(props, node, options, cb) {
  return testRender(props, (r) => {
    r.render(node, options);
    cb(r.groupRef);
  });
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
 * @param {string[]} classes
 */
export function expectClasses(e, classes, equal) {
  const actualClasses = Array.from(e.classList.values());
  classes.forEach((c) => {
    expect(actualClasses).toContain(c);
  });
  if (equal) {
    expect(actualClasses.sort()).toEqual(classes.sort());
  }
}
