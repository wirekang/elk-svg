import { DEFAULT_CLASSNAMES } from "../dist/classname";
import {
  expectAtrrs,
  expectClasses,
  testRender,
  testSingleRender,
} from "./utility";
const C = DEFAULT_CLASSNAMES;

test("render empty node", () => {
  testSingleRender({}, { id: "root" }, {}, (r) => {
    expectAtrrs(r.get("root"), { "data-elk-svg-id": "root" });
    expectClasses(r.get("root"), [C.group, C.nodeGroup], true);
  });
});

test("render classes", () => {
  testSingleRender(
    {},
    { id: "root", children: [{ id: "1" }] },
    { 1: { classes: ["foo", "bar"] } },
    (r) => {
      expectClasses(r.get("1"), [C.group, C.nodeGroup, "foo", "bar"], true);
    },
  );
});

test("render position", () => {
  testSingleRender(
    {},
    { id: "root", children: [{ id: "1", x: 42, y: 24 }] },
    {},
    (r) => {
      expectAtrrs(r.get("1"), {
        transform: "translate(42 24)",
      });
    },
  );
});

test("render delete", () => {
  testRender({}, (r, c) => {
    r.render(
      { id: "root", children: [{ id: "1" }] },
      { 1: { classes: ["asdf"] } },
    );
    r.render({ id: "root", children: [] }, {});
    expect(c.querySelector(".asdf")).toBeNull();
    expect(r.groupRef.get("1")).toBeUndefined();
  });
});

test("render nested nodes", () => {
  testRender({}, (r, c) => {
    r.render(
      {
        id: "root",
        children: [{ id: "1" }, { id: "2", children: [{ id: "3" }] }],
      },
      {},
    );
    const group = r.groupRef.get("root");
    const groups = Array.from(group.querySelectorAll(`.${C.nodeGroup}`));
    expect(groups).toHaveLength(3);
  });
});

test("render nested nodes and delete", () => {
  testRender({}, (r, c) => {
    r.render(
      {
        id: "root",
        children: [
          { id: "1" },
          { id: "2", children: [{ id: "3" }, { id: "4" }] },
        ],
      },
      {},
    );
    expect(r.groupRef.get("3")).toBeDefined();
    expect(c.querySelector(`[data-elk-svg-id="3"]`)).toBeDefined();

    r.render(
      {
        id: "root",
        children: [{ id: "1" }, { id: "2", children: [{ id: "4" }] }],
      },
      {},
    );
    expect(r.groupRef.get("3")).toBeUndefined();
    expect(c.querySelector(`[data-elk-svg-id="3"]`)).toBeNull();
  });
});

test("render rect", () => {
  testSingleRender(
    {},
    {
      id: "root",
      children: [{ id: "1", width: 42, height: 24 }],
    },
    { 1: { shape: "rect" } },
    (r) => {
      const groupElement = r.get("1");
      const shapeElement = groupElement.querySelector(`.${C.nodeShape}`);
      expect(shapeElement).toBeDefined();
      expectClasses(shapeElement, [C.nodeShape], true);
      expectAtrrs(shapeElement, {
        width: "42",
        height: "24",
      });
    },
  );
});
