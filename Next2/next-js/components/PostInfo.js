import Heading from "./Heading";

function PostInfo({ post, user }) {
  let userName = "";
  if (user.id === post.id) {
    userName = user.name;
  } else {
    userName = "Имя не определилось";
  }

  return (
    <>
      <strong>PostInfo</strong>
      <Heading tag="h3" text={`Имя пользователя: ${userName}`} />
      <p>Заголовок поста: {post.title}</p>
      <p>Мой пост: {post.body}</p>
    </>
  );
}

export default PostInfo;
