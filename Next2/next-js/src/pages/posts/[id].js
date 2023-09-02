import Head from "next/head";
import PostInfo from "../../../components/PostInfo";

// статическая генерация страниц
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const responsePost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`);  
    const responseUser = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
    const dataPost = await responsePost.json();
    const dataUser = await responseUser.json();
  
    if (!dataPost){
      return {
        notFound: true,
      }
    }
  
    return {
      props: { post: dataPost, user:dataUser },
    }
  } 

const Posts = ({ post, user }) => (
  <>
    <Head>
      <title>Post</title>
    </Head>
    <PostInfo post={post} user={user} />
  </>
);

export default Posts;
