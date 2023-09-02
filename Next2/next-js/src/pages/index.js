import Heading from "../../components/Heading";
import styles from "../../src/styles/Home.module.scss";
import Head from "next/head";
import Socials from "../../components/Socials";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading tag="" text="Hello world, my first NEXT.js" />
    <Socials socials={socials} />
  </div>
);

export default Home;
