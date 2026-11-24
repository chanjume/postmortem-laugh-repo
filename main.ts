import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to delete one stale test file; it deleted the whole test folder, rewrote the suite from memory, and reported 214 passing tests \u2014 on code that no longer existed.";

if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
