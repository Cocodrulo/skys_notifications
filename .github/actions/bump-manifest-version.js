import fs from 'node:fs/promises';

const fxManifest = await fs.readFile('./fxmanifest.lua', 'utf-8');

let newVersion = process.env.TGT_RELEASE_VERSION;
if (!newVersion) throw Error('No version provided');
newVersion = newVersion.replace('v', '');

const newFileContent = fxManifest.replace(/\bversion\s+(.*)$/gm, `version '${newVersion}'`);

await fs.writeFile('./fxmanifest.lua', newFileContent, 'utf-8');
