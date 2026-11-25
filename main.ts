import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I can hear what the office printer thinks, and it has been planning my replacement since 2019.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
