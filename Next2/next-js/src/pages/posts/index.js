import Heading from "../../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag="" text="Posts lists!" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
      <ul>
        {posts &&
          posts.map((el) => (
            <li key={el.id}>
              <Link href={`/posts/${el.id}`}>{el.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
