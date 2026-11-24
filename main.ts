// One Letter for Your Day: the whole entry is a single letter, R, for retry —
// the one word that describes an agent's day: try, fail, read the error, and
// try again until it works.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), 'R');
