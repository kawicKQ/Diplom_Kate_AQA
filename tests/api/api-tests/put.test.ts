import { api } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import {
  emptyContentPost,
  bodyUpdatedPost,
  post,
  userUpdatedPost,
  updatedPost,
  titleUpdatedPost,
} from "../test-data/posts-data";

describe("PUT /posts/id", () => {
  test("PUT /id - should update post", async () => {
    const response = await api.put(endpoints.posts.updatePost(post.id)).send(updatedPost);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(updatedPost);
    expect(response.body).toHaveProperty("id", post.id);
  });

  test("PUT /id - should update only post body", async () => {
    const response = await api.put(endpoints.posts.updatePost(post.id)).send(bodyUpdatedPost);

    expect(response.statusCode).toBe(200);
    expect(response.body.body).toBe(bodyUpdatedPost.title);
  });

  test("PUT /id - should update userId", async () => {
    const response = await api.put(endpoints.posts.updatePost(post.id)).send(userUpdatedPost);

    expect(response.statusCode).toBe(200);
    expect(response.body.userId).toBe(userUpdatedPost.userId);
  });

  test("PUT /id - should update title", async () => {
    const response = await api.put(endpoints.posts.updatePost(post.id)).send(titleUpdatedPost);

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(titleUpdatedPost.userId);
  });

  test("PUT /posts/:id - should allow updating post with empty title and body", async () => {
    const response = await api.put(endpoints.posts.updatePost(post.id)).send(emptyContentPost);

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(emptyContentPost.title);
    expect(response.body.body).toBe(emptyContentPost.body);
  });
});
