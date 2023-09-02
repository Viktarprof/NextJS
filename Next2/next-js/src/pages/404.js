import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../../components/Heading";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="ERROR - 404" />
      <Heading tag="h4" text="error tetx h4" />
      <h2>что-то пошло не так - перенаправит на главную через 3sek</h2>
    </>
  );
};
export default Error;
