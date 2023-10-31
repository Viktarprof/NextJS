import React from "react";
import s from "@/styles/Button.module.scss";

function Button({ text, style, onClick }) {
  return (
    <button 
      className={`${s[style]}`} 
      onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
