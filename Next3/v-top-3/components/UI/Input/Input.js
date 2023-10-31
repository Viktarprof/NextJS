import React from "react";
import s from "@/styles/Input.module.scss";

function Input({ 
  type, 
  placeholder, 
  styles, 
  title,
  value,
  register,
  name,
  lable
  }) {

    const inputStyles = styles === "inputsUser" || styles === "textarea" 
    ? "inputWrapper" 
    : "";
  return (
    <div className={inputStyles}>
      {title && <span className="spanInput">{title}</span>}
      <input
        placeholder={placeholder}
        type={type}
        className={`${s[styles]}`}
        value={value}
        {...register(name)}
      />
    </div>
  );
}

export default Input;
