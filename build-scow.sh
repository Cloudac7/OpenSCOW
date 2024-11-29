#!/bin/bash

set -e

pnpm fetch
pnpm i --offline --frozen-lockfile
node scripts/createVersionFile.mjs version.json
pnpm build --filter='!@scow/docs' --filter='!@scow/cli'
node scripts/copyDist.mjs
mv version.json ./dist
cp -r patches ./dist/patches
cd ./dist
pnpm i --offline --prod --frozen-lockfile
rm -rf apps/mis-web/.next/cache apps/portal-web/.next/cache apps/ai/.next/cache
cd ..

mv dist scow-dist
tar -czf scow-dist.tgz ./scow-dist
