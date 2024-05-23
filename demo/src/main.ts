import ELK, { type ElkNode } from "elkjs";
import "./style.css";
import { ElkSvg } from "elk-svg";
import { exampleNodes } from "./data";

async function go(node: ElkNode) {
  const container = document.getElementById("container")!;
  container.innerHTML = "";
  const elkSvg = new ElkSvg({
    container,
    defaultRenderingOptions: {
      node: { shape: "rect" },
      edge: { arrow: { size: 10, shape: "arrow-normal", thickness: 1 } },
      port: { shape: "diamond" },
    },
    idAttribute: "data-demo-id",
  });
  const elk = new ELK();
  (window as any).before = structuredClone(node);
  (window as any).after = structuredClone(node);
  await elk.layout(node);
  elkSvg.render(node);

  setTimeout(() => {
    console.log("re-render", structuredClone(node));
    node.x = 200;
    node.y = 200;
    elkSvg.render(node);
  }, 1000);
}

let i = 1;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Enter":
      console.log("example", i);
      go(exampleNodes[i]);
      i += 1;
      if (i === exampleNodes.length) {
        i = 0;
      }
      break;
  }
});

go(exampleNodes[0]);
