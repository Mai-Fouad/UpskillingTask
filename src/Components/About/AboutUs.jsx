import React from "react";
import style from "./AboutUs.module.css";
import Garbage from "../../assets/Garbage2.png";
import Button from "../../UI/Button/Button";

export default function AboutUsPage() {
  return (
    <section className={style.aboutSection}>
      <div className={style.layer}>
        <div className="container-lg py-md-5">
          <div className="row">
            <div className="col-md-6">
              <div className={`${style.aboutUsContainer} + ${"text-start"}`}>
                <h3>About us</h3>
                <p className="my-md-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
                <div className={style.imgContainer}>
                  <img src={Garbage} alt="Garbage" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-5">
              <div className={`${style.whereContainer} + ${"text-end mt-5"}`}>
                <h3>where</h3>
                <p className="mt-md-4 ps-md-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <Button styleName={"aboutBtn"} styleText={"aboutText"}>
                Help me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
