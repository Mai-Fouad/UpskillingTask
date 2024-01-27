import React from "react";
import Card from "../../UI/Card/Card";
import Service1 from "../../assets/Service1.png";
import Service2 from "../../assets/Service2.png";
import Service3 from "../../assets/Service3.png";
import Title from "../../UI/SectionTitle/Title";
import Button from "../../UI/Button/Button";

export default function Services() {
  return (
    <div className="container py-5">
      <div className="pt-2 pb-4">
        <Title sectionTitle={"Services"} />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card serviceImg={Service1} />
        </div>
        <div className="col">
          <Card serviceImg={Service2} />
        </div>
        <div className="col">
          <Card serviceImg={Service3} />
        </div>
      </div>
      <div>
        <Button styleName={"helpBtnService"} styleText={"helpTextService"}>
          Help me
        </Button>
      </div>
    </div>
  );
}
