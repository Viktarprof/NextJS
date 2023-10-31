import News from "@/components/News";
import Head from "next/head";
import React from "react";
import { news } from "@/pages/api/requests";

export async function getStaticPaths() {
  const paths = news.map((el) => ({
    params: { id: el.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id);
  const newsItem = news.find((item) => item.id === id);

  return {
    props: {
      newsItem,
    },
  };
}

function NewsId({ newsItem }) {
  return (
    <div>
      <Head>
        <title>News: {newsItem.title}</title>
      </Head>
      <News {...newsItem}/>
    </div>
  );
}

export default NewsId;
