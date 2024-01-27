import React from "react";
import style from "./LandingPage.module.css";
import Button from "../../UI/Button/Button";
import TrashCar from "../../assets/TrashHauling.png";

export default function LandingPage() {
  return (
    <section className={style.landingSection}>
      <div className={`${style.subTitle} + ${"mb-md-4"}`}>
        <div className="d-flex align-items-center justify-content-center pt-md-5">
          <div className={style.imgContainer}>
            <img src={TrashCar} alt="Trash Car" />
          </div>
          <div className="d-flex flex-column align-items-start ps-3">
            <h3 className={style.subTitleTop}>Round Rock</h3>
            <h3 className={style.subTitleDown}>Trush Hauling</h3>
          </div>
        </div>
      </div>
      <Button styleName="expertBtn" styleText="expertText" className={'mt-md-4'}>
        Experts
      </Button>
      <div className={style.title}>
        <h1 className={style.titleTop}>Lorem</h1>
        <h1 className={style.titleDown}>Lorem lorem</h1>
      </div>
      <div className={`${style.titleDescContainer} + ${'mt-md-4 mt-sm-3'}`}>
        <p className={style.titleDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      </div>
      <Button styleName="helpBtn" styleText="helpText" className={'mt-md-5'}>
        Help me
      </Button>
    </section>
  );
}
