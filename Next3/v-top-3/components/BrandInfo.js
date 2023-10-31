import React from "react";
import s from "@/styles/BrandInfo.module.scss";

function BrandInfo(brand) {
  const { title, info, dateTime } = brand;

  const [month, day, year] = dateTime.split("-");
  let newDate = `${month}/${day}/${year}`;

  newDate =
    typeof dateTime === "string"
      ? `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
      : "Неверный формат даты";

  const regex = /(?<=[.!?:])\s+/;
  const paragraphs = info.split(regex);

  return (
    <div className={s.brand}>
      <h3 className={s.brandTitle}>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p className={s.info} key={index}>
          {paragraph}
        </p>
      ))}
      <p className={s.dateTime}>{newDate}</p>
    </div>
  );
}

export default BrandInfo;
