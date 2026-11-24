import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "For $9 a month, we mail your dying houseplant a handwritten apology letter — guilt is the best retention strategy in SaaS.";

if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, over the 200 limit`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n");
