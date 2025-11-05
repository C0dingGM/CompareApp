import { spawn } from 'node:child_process';
import { rm } from 'node:fs/promises';

let child;
let restarting = false;

const start = () => {
  child = spawn('next', ['dev', '-p', '3000'], { stdio: ['inherit', 'pipe', 'pipe'], env: process.env });

  const onOutput = async (buf) => {
    const msg = buf.toString();
    process.stdout.write(msg);
    if (!restarting && /Cannot find module '\.\/[0-9]+\.js'/.test(msg)) {
      restarting = true;
      console.log('\nDetected Next.js cache chunk error. Restarting dev server with clean .next...');
      child.kill('SIGTERM');
    }
  };

  child.stdout.on('data', onOutput);
  child.stderr.on('data', onOutput);

  child.on('close', async () => {
    if (restarting) {
      try { await rm('.next', { recursive: true, force: true }); } catch {}
      restarting = false;
      start();
    }
  });
};

process.on('SIGINT', () => { try { child?.kill('SIGINT'); } finally { process.exit(0); } });
process.on('SIGTERM', () => { try { child?.kill('SIGTERM'); } finally { process.exit(0); } });

start();
