import { api } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { notExistingPost, post, stringIdPost } from "../test-data/posts-data";

describe("GET /posts", () => {
  test("GET - should return list of all posts", async () => {
    const response = await api.get(endpoints.posts.getPosts);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("GET /id - should return post by ID", async () => {
    const response = await api.get(endpoints.posts.getPostById(post.id));

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(post);
    expect(response.body.id).toBe(post.id);
  });

  test("GET /id - should return 404 for not existing post", async () => {
    const response = await api.get(endpoints.posts.getPostById(notExistingPost)).ok((res) => true);

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });

  test("GET /id - should return 404 for string id", async () => {
    const response = await api.get(endpoints.posts.getPostById(stringIdPost)).ok((res) => true);

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });

  test("GET - should return all comments for post", async () => {
    const response = await api.get(endpoints.posts.getPostComments(post.id));
    response.body.forEach((comment: any) => {
      expect(comment.postId).toBe(post.id);
    });
  });
});
