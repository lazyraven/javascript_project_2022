// 1. TypeScript-typed API wrapper
// api.ts
import type { Profile, Post, Comment } from './type.js';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} @ ${url}`);
  return res.json();
}
// async function fetchProfile(): Promise<Profile> {
//   return fetchJson<Profile>('https://api.example.com/profile');
// }
// async function fetchPosts(): Promise<Post[]> {
//   return fetchJson<Post[]>('https://api.example.com/posts');
// }
// async function fetchComments(): Promise<Comment[]> {
//   return fetchJson<Comment[]>('https://api.example.com/comments');
// }

// async function fetchJson<T>(url: string): Promise<T> {
export { fetchJson };