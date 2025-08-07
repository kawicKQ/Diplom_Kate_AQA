export const post = {
  userId: 1,
  id: 2,
  title: "qui est esse",
  body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
};

export const notExistingPost = 555060909;

export const stringIdPost = "testKH";

export const spacesAsPostId = "   ";

export const patchBody = {
  body: "patched body",
};

export const patchUserId = {
  userId: 567,
};

export const patchTitle = {
  title: "patched title",
};

export const patchTitleBody = {
  title: "patched title",
  body: "patched body",
};

export const patchWithEmptyTitle = {
  title: "",
};

export const newPost = {
  userId: 13,
  title: "new post by KH",
  body: "post body for new post",
};

export const emptyBodyPost = {
  userId: 144,
  title: "title kh",
};

export const emojiPost = {
  userId: 1,
  title: "🎉 New post!",
  body: "Testing emojis✅",
};
export const emojiTitle = "🎉";
export const emojiBody = "✅";

export const specialChPost = {
  userId: 1,
  title: "------!",
  body: "-)))",
};

export const cyrillicPost = {
  userId: 1,
  title: "Катя",
  body: "Диплом",
};

export const updatedPost = {
  userId: post.userId,
  id: post.id,
  title: "updated title kh",
  body: "updated body kh",
};

export const bodyUpdatedPost = {
  userId: post.userId,
  id: post.id,
  title: post.title,
  body: "updated post body kh",
};

export const userUpdatedPost = {
  userId: 444,
  id: post.id,
  title: post.title,
  body: post.body,
};

export const titleUpdatedPost = {
  userId: post.userId,
  id: post.id,
  title: "updated title",
  body: post.body,
};

export const emptyContentPost = {
  userId: post.userId,
  id: post.id,
  title: "",
  body: "",
};
