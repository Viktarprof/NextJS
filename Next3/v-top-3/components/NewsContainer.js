import React, { useEffect, useState } from "react";
import s from "@/styles/NewsContainer.module.scss";
import { load_news } from "@/pages/api/requests";
import NewsItem from "./NewsItem";
import Button from "./UI/Button/Button";

function NewsContainer() {
  const [news, setNews] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);
  const [visibleNewsCount, setVisibleNewsCount] = useState(7);

  useEffect(() => {
    load_news((data) => {
      setNews(data);
    });
  }, []);

  const filteredNews = selectCategory
    ? news.filter((el) => el.category === selectCategory)
    : news;

  const visibleNews = filteredNews.slice(0, visibleNewsCount);

  const showMore = () => {
    setVisibleNewsCount(visibleNewsCount + 3); 
    console.log('test');
  };

  const activeStyle = selectCategory === null ? "active" : "btnNews";

  return (
    <div className={s.container}>
      <div className={s.navNews}>
        <Button
          text="All"
          style={activeStyle}
          onClick={() => setSelectCategory(null)}
        />
        {news
          .filter(
            (el, index, self) =>
              self.findIndex((t) => t.category === el.category) === index
          )
          .map((el) => (
            <Button
              key={el.id}
              text={ el.category }
              style={selectCategory === el.category ? "active" : "btnNews"}
              onClick={() => setSelectCategory(el.category)}
            />
          ))}
      </div>

      <ul className={s.newsList}>
        {visibleNews.map((el) => 
          <NewsItem 
            key={el.id} 
            {...el} />)}
      </ul>
    
        <Button 
          style="btnSeeMore" 
          text="see more" 
          onClick={()=>showMore()} />
    </div>
  );
}

export default NewsContainer;
