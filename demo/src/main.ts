import { initElkSvg } from "elk-svg";
import ELK, { type ElkNode } from "elkjs";
import { exampleNodes } from "./data";
import "./style.css";

async function go(node: ElkNode) {
  const container = document.getElementById("container")!;
  container.innerHTML = "";
  const elkSvg = initElkSvg({
    container,
    defaultRenderingOptions: {
      node: { shape: "capsule" },
      edge: { arrow: { size: 10, shape: "arrow-normal", thickness: 1 } },
      port: { shape: "diamond" },
    },
    idAttribute: "data-demo-id",
  });
  const elk = new ELK();
  (window as any).before = structuredClone(node);
  (window as any).after = structuredClone(node);
  await elk.layout(node);
  node.x! += 20;
  node.y! += 20;
  elkSvg.render(node);

  setTimeout(() => {
    console.log("re-render", structuredClone(node));

    node.x! += 20;
    node.y! += 20;
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
