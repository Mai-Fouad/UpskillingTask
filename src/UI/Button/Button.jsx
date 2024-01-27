import React from "react";
import style from "./Button.module.css";

export default function Button({ children, styleName, styleText, className }) {
  return (
    <button className={`${style[styleName]}  + ${className}`}>
      <p className={`${style[styleText]} + ${style.btnText}`}>{children}</p>
    </button>
  );
}
