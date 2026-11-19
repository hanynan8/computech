// Usage: node --env-file=.env.local scripts/seed-content.mjs [--dry-run]
// Replaces each collection named after seed/<name>.json with that single document.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dryRun = process.argv.includes('--dry-run');
const seedDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'seed');
const uri = process.env.MONGO_URI;
if (!uri && !dryRun) {
  console.error('MONGO_URI is not set (use: node --env-file=.env.local scripts/seed-content.mjs)');
  process.exit(1);
}

const files = (await readdir(seedDir)).filter((f) => f.endsWith('.json')).sort();
const docs = [];
for (const f of files) {
  const doc = JSON.parse(await readFile(path.join(seedDir, f), 'utf8'));
  docs.push({ name: path.basename(f, '.json'), doc });
}

const { MongoClient } = dryRun ? {} : await import('mongodb');
const client = dryRun ? { close: async () => {} } : new MongoClient(uri);
try {
  if (!dryRun) await client.connect();
  const db = dryRun ? null : client.db(); // DB name comes from the URI
  for (const { name, doc } of docs) {
    if (dryRun) {
      console.log(`[dry-run] ${name}: would deleteMany({}) then insertOne (${Object.keys(doc).join(', ')})`);
      continue;
    }
    const col = db.collection(name);
    const del = await col.deleteMany({});
    await col.insertOne(doc);
    console.log(`${name}: deleted ${del.deletedCount}, inserted 1`);
  }
  console.log(dryRun ? 'Dry run complete, nothing written.' : 'Seed complete.');
} finally {
  await client.close();
}
