
// Destructuring Assignment
//  1. Object Destructuring with Defaults & Renaming <small>Useful for API responses where some fields might be missing:</small>
                    const article = {
                        id: '001',
                        writer: { name: 'Chameera' }
                        };

                        const {
                        id: articleId = 'N/A',
                        title = 'Untitled',
                        writer: { name: writerName }
                        } = article;

                        console.log(articleId, title, writerName);
                        // 001 'Untitled' 'Chameera'

// 2. Nested Array & Object Destructuring <small>Ideal for parsing complex data:</small>
                    const response = {
                    user: {
                        details: { name: 'Sam', age: 28 },
                        roles: ['admin', 'editor']
                    }
                    };

                    const {
                    user: {
                        details: { name, age },
                        roles: [primaryRole, ...otherRoles]
                    }
                    } = response;

                    console.log(name, age, primaryRole, otherRoles);
                    // Sam 28 'admin' ['editor']


// 3. Function Parameters <small>Great for cleaner function signatures:</small>
                    function display({ title, writer: { name = 'Guest' } }) {
                    console.log(`"${title}" by ${name}`);
                    }

                    display({ title: 'ES6 Magic', writer: {} });
                    // "ES6 Magic" by Guest

// Promises & async/await

// 1. Fetching Data with Promises  <small>Using Promises to handle asynchronous operations:</small>
                    function fetchUsers() {
                        return fetch('https://jsonplaceholder.typicode.com/users')
                            .then(res => {
                            if (!res.ok) throw new Error(res.status);
                            return res.json();
                            });
                        }
                        fetchUsers()
                        .then(users => console.log(users.length + ' users loaded'))
                        .catch(err => console.error('Error fetching users:', err));

// 2. Cleaner with async/await <small>Using async/await for more readable asynchronous code:</small>
//                 Same logic, but more readable:
                    async function loadUsers() {
                    try {
                        const res = await fetch('https://jsonplaceholder.typicode.com/users');
                        if (!res.ok) throw new Error(res.status);
                        const users = await res.json();
                        console.log(users.length + ' users loaded');
                    } catch (err) {
                        console.error('Error loading users:', err);
                    }
                    }

                  loadUsers();

// 3. Parallel Requests with Promise.any <small>Handling multiple asynchronous operations:</small>
                        Promise.any([
                        fetch('/api/server1'),
                        fetch('/api/server2'),
                        fetch('/api/server3')
                        ])
                            .then(res => res.json())
                            .then(data => console.log('First successful:', data))
                            .catch(err => console.error('All servers failed:', err));

// 4. Error Handling with try/catch <small>Using try/catch for error handling in async functions:</small>
// Example combining ES6+ features—destructuring, async/await, and parallel API calls—in a clean, maintainable way.

                async function fetchJson(url) {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status} at ${url}`);
                return res.json();
                }

                async function loadUserDashboard(userId) {
                try {
                    // Parallel requests: profile & posts
                    const [profile, posts] = await Promise.all([
                    fetchJson(`https://api.example.com/users/${userId}`),
                    fetchJson(`https://api.example.com/users/${userId}/posts`)
                    ]);

                    // Destructure essential fields from profile
                    const { id, name, settings: { theme = 'light', language = 'en' } = {} } = profile;

                    // Fetch comments for each post in parallel
                    const postWithComments = await Promise.all(
                    posts.map(async ({ id: postId, title, body }) => {
                        const comments = await fetchJson(`https://api.example.com/posts/${postId}/comments`);
                        return { postId, title, body, commentsCount: comments.length, comments };
                    })
                    );

                    return { id, name, theme, language, posts: postWithComments };

                } catch (err) {
                    console.error('Failed to load dashboard:', err);
                    throw err;
                }
                }

                // Usage:
                loadUserDashboard(42)
                .then(data => console.log('Dashboard data:', data))
                .catch(err => console.error(err));

// Typescript types
                  





  