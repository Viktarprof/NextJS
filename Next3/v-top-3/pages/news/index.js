import Heading from "@/components/Heading";
import Head from "next/head";
import React from "react";
import s from "@/styles/News.module.scss";
import NewsContainer from "@/components/NewsContainer";

function News() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
        <div className={s.backgroundNews}>
          <Heading text={"NEWS"} tag="h4" style="tagNewHead" />
          <NewsContainer />
        </div>

    </>
  );
}

export default News;
