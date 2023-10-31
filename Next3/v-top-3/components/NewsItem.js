import React from "react";
import s from "@/styles/NewsContainer.module.scss";
import { IoIosPricetag } from "react-icons/io";
import newsItem from "@/public/news/news_item.jpeg";
import Link from "next/link";
import Head from "next/head";

function NewsItem({ id, title, category }) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDate = day + "." + month + "." + year;

  const styleImageContainer = {
    backgroundImage: `url(${newsItem.src})`,
  };

  const newTitle = title.length > 30 ? title.slice(0, 30) + " ..." : title;

  return (
    <>
      <Head>
        <title>New - {category}</title>
      </Head>
      <li className={s.newsItem}>
        <Link
          href={`news/${id}`}
          className={s.imageContainer}
          style={styleImageContainer}
        >
          <p>Example image</p>
        </Link>

        <div className={s.info}>
          <div className={s.lable}>
            <IoIosPricetag />
            <p className={s.category}>{category}</p>
          </div>
          <p className={s.date}>{formatDate}</p>
          <h4>{newTitle}</h4>
        </div>
      </li>
    </>
  );
}

export default NewsItem;
