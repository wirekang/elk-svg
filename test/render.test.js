import { expectAtrrs, expectClasses, testRender } from "./utility";

const classnames = {
  group: "g",
  nodeGroup: "ng",
  rootNodeGroup: "rn",
};

test("render empty node", () => {
  testRender({ classnames }, (container, render) => {
    render({ id: "root" }, {});
    expectAtrrs(container.querySelector("g"), { "data-elk-id": "root" });
    expectClasses(container.querySelector("g"), "g ng rn");
  });
});

test("render simple node", () => {
  testRender({ classnames }, (container, render) => {
    render({ id: "root", children: [{ id: "child" }] }, {});
    expectAtrrs(container.querySelector("g"), { "data-elk-id": "root" });
    expectClasses(container.querySelector("g"), "g ng rn");
  });
});
