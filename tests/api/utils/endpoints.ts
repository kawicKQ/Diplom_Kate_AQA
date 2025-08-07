export const endpoints = {
  posts: {
    getPosts: "/posts",
    getPostById: (id: number | string) => `/posts/${id}`,
    getPostComments: (id: number) => `/comments?postId=${id}`,
    createPost: "/posts",
    updatePost: (id: number | string) => `/posts/${id}`,
    deletePost: (id: number | string) => `/posts/${id}`,
  },
};
