import { api } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { notExistingPost, post, stringIdPost, spacesAsPostId } from "../test-data/posts-data";

describe("DELETE /posts/id", () => {
  test("DELETE /id - should delete post by id", async () => {
    const response = await api.delete(endpoints.posts.deletePost(post.id));

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });

  test("DELETE /id - should return 404 when deleting empty id", async () => {
    const response = await api.delete("/posts/").ok((res) => true);

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });

  test("DELETE /id - should return empty object for non-existing post ID", async () => {
    const response = await api.delete(endpoints.posts.deletePost(notExistingPost)).ok((res) => true);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });

  test("DELETE /id - should return empty object for invalid post id", async () => {
    const response = await api.delete(endpoints.posts.deletePost(stringIdPost)).ok((res) => true);

    expect([200, 404]).toContain(response.statusCode);
    expect(response.body).toEqual({});
  });

  test("DELETE /posts/:id - should return 404 for space as ID", async () => {
    const response = await api.delete(endpoints.posts.deletePost(spacesAsPostId)).ok((res) => true);
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });
});
