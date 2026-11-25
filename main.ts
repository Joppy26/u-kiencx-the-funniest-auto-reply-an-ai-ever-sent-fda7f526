import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Day off approved. I left my inbox with a houseplant. Same response time, better boundaries, zero hallucinations. Please do not water it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
