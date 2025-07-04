// 3. Unit tests with Jest



// loader.test.ts
import { loadUserDashboard } from './loader';
import type { Dashboard } from './loader';

// global.fetch = jest.fn();

// const mockProfile = { id: 1, name: 'Alice', settings: { theme: 'dark' } };
// const mockPosts = [{ id: 10, title: 'Post1', body: 'Body1' }];
// const mockComments = [{ id: 100, postId: 10, body: 'Hi' }];

// beforeEach(() => {
//   (fetch as jest.Mock).mockImplementation((url: string) => {
//     if (url.endsWith('/users/1')) {
//       return Promise.resolve({ ok: true, json: () => mockProfile });
//     }
//     if (url.endsWith('/posts') && url.includes('users/1')) {
//       return Promise.resolve({ ok: true, json: () => mockPosts });
//     }
//     if (url.includes('/comments')) {
//       return Promise.resolve({ ok: true, json: () => mockComments });
//     }
//     return Promise.resolve({ ok: false, status: 404 });
//   });
// });

// it('loads and structures dashboard correctly', async () => {
//   const data: Dashboard = await loadUserDashboard(1);
//   expect(data).toMatchObject({
//     id: 1,
//     name: 'Alice',
//     theme: 'dark',
//     language: 'en',
//     posts: [
//       {
//         postId: 10,
//         title: 'Post1',
//         body: 'Body1',
//         commentsCount: 1,
//         comments: mockComments
//       }
//     ]
//   });
// });

// it('throws on fetch error', async () => {
//   (fetch as jest.Mock).mockResolvedValueOnce({
//     ok: false,
//     status: 500
//   });
//   await expect(loadUserDashboard(1)).rejects.toThrow('HTTP 500');
// });
