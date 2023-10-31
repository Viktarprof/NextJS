import React, { useEffect, useRef } from "react";
import s from "@/styles/Carousel.module.scss";
import Image from "next/image";

function CarouseleItem({ images, style }) {

  return (
    <div className={`${s[style]}`} >
      {images.map((el) => (
        <Image
          key={el.id}
          src={el.image}
          alt={el.title}
          width={100}
        />
      ))}
    </div>
  );
}

export default CarouseleItem;
