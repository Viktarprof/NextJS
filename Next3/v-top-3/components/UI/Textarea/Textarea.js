import React from "react";
import s from "@/styles/Textarea.module.scss";

function Textarea({ type, placeholder, styles, title, register, name }) {
  const textareaStyles = s[styles];
  return (
    <div className="areaWrapper">
      <span className="spanArea">{title}</span>
      <textarea
        type={type}
        placeholder={placeholder}
        className={textareaStyles}
        {...register(name)}
      />
    </div>
  );
}

export default Textarea;
