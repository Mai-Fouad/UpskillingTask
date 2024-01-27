import React from "react";
import Title from "../../UI/SectionTitle/Title";
import Comment from "../../UI/Comment/Comment";

export default function Testymonials() {
  return (
    <div className="container py-4">
      <div className="pt-2 pb-4">
        <Title sectionTitle={"Testmonials"} />
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Comment />
        </div>
        <div className="col">
          <Comment />
        </div>
        <div className="col">
          <Comment />
        </div>
        <div className="col">
          <Comment />
        </div>
      </div>
    </div>
  );
}
