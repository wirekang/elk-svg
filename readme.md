# elk-svg

## Usage
`npm install elk-svg`

```typescript
import { ElkSvg } from "elk-svg";

const elk = new ELK();
const elkSvg = new ElkSvg({ container:document.querySelector("svg") });

async function renderElkNode(node:ElkNode) {
    await elk.layout(node);
    elkSvg.render(node);
}
```
