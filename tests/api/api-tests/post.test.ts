import { api } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import {
  newPost,
  emptyBodyPost,
  emojiPost,
  emojiTitle,
  emojiBody,
  specialChPost,
  cyrillicPost,
} from "../test-data/posts-data";

describe("POST /posts", () => {
  test("POST - should create a new post", async () => {
    const response = await api.post(endpoints.posts.createPost).send(newPost);

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newPost);
    expect(response.body).toHaveProperty("id");
  });

  test("POST - should create post without body", async () => {
    const response = await api.post(endpoints.posts.createPost).send(emptyBodyPost);

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(emptyBodyPost);
  });

  test("POST - should create post with emoji in title and body", async () => {
    const response = await api.post(endpoints.posts.createPost).send(emojiPost);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toContain(emojiTitle);
    expect(response.body.body).toContain(emojiBody);
  });

  test("POST - should create post special characters in fields", async () => {
    const response = await api.post(endpoints.posts.createPost).send(specialChPost);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toContain(specialChPost.title);
    expect(response.body.body).toContain(specialChPost.body);
  });

  test("POST /posts - should create post with Cyrillic characters", async () => {
    const response = await api.post(endpoints.posts.createPost).send(cyrillicPost);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(cyrillicPost.title);
    expect(response.body.body).toBe(cyrillicPost.body);
  });
});
