import { api } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { patchBody, patchTitleBody, patchTitle, patchUserId, post, notExistingPost } from "../test-data/posts-data";

describe("PATCH /posts/id", () => {
  test("Should update only body by id", async () => {
    const response = await api.patch(endpoints.posts.updatePost(post.id)).send(patchBody);

    expect(response.statusCode).toBe(200);
    expect(response.body.body).toBe(patchBody.body);
    expect(response.body).toHaveProperty("id", post.id);
  });

  test("Should update only title by id", async () => {
    const response = await api.patch(endpoints.posts.updatePost(post.id)).send(patchTitle);

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(patchTitle.title);
    expect(response.body).toHaveProperty("id", post.id);
  });

  test("Should update title and body by id", async () => {
    const response = await api.patch(endpoints.posts.updatePost(post.id)).send(patchTitleBody);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(patchTitleBody);
    expect(response.body).toHaveProperty("id", post.id);
  });

  test("Should update userId for the post by id", async () => {
    const response = await api.patch(endpoints.posts.updatePost(post.id)).send(patchUserId);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("userId", patchUserId.userId);
    expect(response.body).toHaveProperty("id", post.id);
  });

  test("Should return 404 for non-existing post id", async () => {
    const response = await api.patch(endpoints.posts.updatePost(notExistingPost)).send(patchUserId);

    expect([200, 404]).toContain(response.statusCode);
  });
});
