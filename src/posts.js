const posts = [
    { id: 1, slug: 'first-post', title: 'My First Post', content: 'This is the content of my first post.' },
    { id: 2, slug: 'second-post', title: 'My Second Post', content: 'This is the content of my second post.' },
    { id: 3, slug: 'third-post', title: 'My Third Post', content: 'This is the content of my third post.' },
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export default getAllPosts;