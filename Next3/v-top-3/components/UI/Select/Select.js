import React from "react";
import s from "@/styles/Select.module.scss";

function Select({ styles, title, options, register, name }) {
  console.log(options);
  return (
    <div className="inputWrapper">
      {title && <span className="spanSelect">{title}</span>}
      <select className={`${s[styles]}`} {...register(name)}>
        {options.map((el) => (
          <option key={el.id} value={el.value}>
            {el.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
