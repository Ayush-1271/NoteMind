#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';

const home = os.homedir();
const installRoot = process.env.NODEMIND_HOME || path.join(home, '.nodemind');
const installer = path.join(installRoot, 'install.sh');
const sourceInstaller = path.resolve(import.meta.dirname, '..', '..', 'install.sh');

if (!fs.existsSync(installer)) {
  fs.mkdirSync(installRoot, { recursive: true });
  fs.copyFileSync(sourceInstaller, installer);
  fs.chmodSync(installer, 0o755);
}

const result = spawnSync(installer, { stdio: 'inherit', shell: true, env: process.env });
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
