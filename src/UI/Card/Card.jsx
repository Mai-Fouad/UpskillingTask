import React from "react";
import style from "./Card.module.css";

export default function Card({ serviceImg }) {
  return (
    <div
      className="card border-0 rounded-4 text-right shadow mb-5 overflow-hidden"
    >
      <img src={serviceImg} className="card-img-top" alt="..." />
      <div className="card-body text-start">
        <h5 className={`${"card-title"} + ${style.cardTitle}`}>Lorem Ipsum</h5>
        <p className={`${"card-text"} + ${style.cardBody}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>
    </div>
  );
}
