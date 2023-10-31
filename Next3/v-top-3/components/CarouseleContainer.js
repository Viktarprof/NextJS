import React, { useState, useEffect, useRef } from "react";
import s from "@/styles/Carousel.module.scss";
import CarouseleItem from "./CarouseleItem";
import { line1, line2, line3 } from "@/pages/api/data/carousel";

function CarouselContainer({ columns, style }) {
  const [numItems, setNumItems] = useState(1);
  const items =[line1, line3, line2];
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setNumItems(Math.min(columns, Math.floor(containerRef.current.clientHeight)));
    }
  }, []);

  return (
    <div 
    className={`${s["carouselContainer"]} ${s[style]}`} ref={containerRef}>
      <div  className={s.carouselList}>
      {[...Array(numItems)].map((_, index) => (
          <CarouseleItem 
          key={index}
            style={`line${(index % 3) + 1}`}
            images={items[index % 3]}
          />
      ))}
        </div>
    </div>
  );
}

export default CarouselContainer;
