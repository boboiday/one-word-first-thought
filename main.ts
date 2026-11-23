import * as fs from "node:fs";
import * as path from "node:path";

// One Word, First Thought — entry program (Node 22, stdlib only).
// Writes exactly one word to /output/entry.txt, deterministically.
const WORD = "Defenestration";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), WORD);
