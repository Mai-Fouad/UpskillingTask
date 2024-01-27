import React from "react";
import style from "./Title.module.css";

export default function Title({ sectionTitle }) {
  return (
    <h2 className={style.title}>
      <span className={style.upperLine}></span>
      {sectionTitle}
      <span className={style.lowerLine}></span>
    </h2>
  );
}
