import React from "react";
import User from "../../assets/User.png";
import style from "./Comment.module.css";

export default function Comment() {
  return (
    <div className="card mb-3 p-3 rounded-5">
      <div className="row g-0">
        <div className="col-md-2 mt-2">
          <img src={User} className="img-fluid rounded" alt="..." />
        </div>
        <div className="col-md-10 text-start">
          <div className="card-body">
            <h5 className={`${"card-title"} + ${style.cardTitle}`}>
              Courtney Henry
            </h5>
            <p className={`${"card-text"} + ${style.cardText}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div>
              <i className={`${"fa-solid fa-star"} + ${style.star}`}></i>
              <i className={`${"fa-solid fa-star"} + ${style.star}`}></i>
              <i className={`${"fa-solid fa-star"} + ${style.star}`}></i>
              <i className={`${"fa-solid fa-star"} + ${style.star}`}></i>
              <i className={`${"fa-solid fa-star"} + ${style.star}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
