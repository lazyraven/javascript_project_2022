// 1. TypeScript-typed API wrapper
// types.ts
export interface Profile {
  id: number;
  name: string;
  settings?: {
    theme?: string;
    language?: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
}
