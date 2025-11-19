import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export type StoredUser = { username: string; hash: string; salt: string };

const dataDir = path.join(process.cwd(), '.data');
const usersFile = path.join(dataDir, 'users.json');

async function ensureFile() {
  try { await fs.mkdir(dataDir, { recursive: true }); } catch {}
  try { await fs.access(usersFile); } catch { await fs.writeFile(usersFile, '[]', 'utf8'); }
}

export async function loadUsers(): Promise<StoredUser[]> {
  await ensureFile();
  const raw = await fs.readFile(usersFile, 'utf8');
  try { return JSON.parse(raw) as StoredUser[]; } catch { return []; }
}

export async function saveUsers(users: StoredUser[]) {
  await ensureFile();
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf8');
}

export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const s = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, s, 100_000, 64, 'sha512').toString('hex');
  return { hash, salt: s };
}

export function verifyPassword(password: string, user: StoredUser): boolean {
  const { hash } = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(user.hash, 'hex'));
}

export async function findUser(username: string): Promise<StoredUser | undefined> {
  const users = await loadUsers();
  return users.find(u => u.username.toLowerCase() === username.toLowerCase());
}

export async function createUser(username: string, password: string): Promise<StoredUser> {
  const users = await loadUsers();
  if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('USERNAME_TAKEN');
  }
  const { hash, salt } = hashPassword(password);
  const user: StoredUser = { username, hash, salt };
  users.push(user);
  await saveUsers(users);
  return user;
}
