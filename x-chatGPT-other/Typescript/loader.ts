// 2. Dashboard loader with types

// loader.ts
import type { Profile, Post, Comment } from './type.js';
import { fetchJson } from './api.js';

export interface Dashboard {
  id: number;
  name: string;
  theme: string;
  language: string;
  posts: Array<{
    postId: number;
    title: string;
    body: string;
    commentsCount: number;
    comments: Comment[];
  }>;
}

export async function loadUserDashboard(userId: number): Promise<Dashboard> {
  const [profile, posts] = await Promise.all([
    fetchJson<Profile>(`https://api.example.com/users/${userId}`),
    fetchJson<Post[]>(`https://api.example.com/users/${userId}/posts`)
  ]);

  const { id, name, settings: { theme = 'light', language = 'en' } = {} } = profile;

  const postsWithComments = await Promise.all(
    posts.map(async ({ id: postId, title, body }) => {
      const comments = await fetchJson<Comment[]>(
        `https://api.example.com/posts/${postId}/comments`
      );
      return { postId, title, body, commentsCount: comments.length, comments };
    })
  );

  return { id, name, theme, language, posts: postsWithComments };
}
