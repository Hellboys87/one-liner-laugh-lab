// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
//
// Joke choice, in my own words: instead of denying the crime or blaming the
// sock, the vacuum goes full courtroom deadpan. It claims the sock walked
// into its mouth of its own free will, then backs that up with an absurdly
// precise witness count — 47 of them. The punchline is who the witnesses
// are: dust bunnies, the one thing a vacuum actually collects, so its only
// evidence is the fluff it was supposed to clean up. The humour lives in
// the gap between the confident legal tone and the total uselessness of
// the evidence.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The sock entered my mouth voluntarily. I have 47 witnesses, all dust bunnies.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
