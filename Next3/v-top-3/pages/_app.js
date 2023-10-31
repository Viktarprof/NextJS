import Layout from "@/components/Layout";
import "../styles/globals.scss";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
