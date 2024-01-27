import React, { useState } from "react";
import Title from "../../UI/SectionTitle/Title";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import style from "./Contact.module.css";

export default function Contact() {
  const [hasSent, setHasSent] = useState(false);
  const [enteredValues, setEnteredValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const sendData = async (userData) => {
    await fetch("http://upskilling-egypt.com:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      if (res.ok) {
        setHasSent(true);
      }
    });
  };

  const handleInputChange = (id, value) => {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setEnteredValue({
      name: "",
      email: "",
      phone: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: enteredValues.name,
      email: enteredValues.email,
      phone: enteredValues.phone,
    };
    sendData(userData);
    resetForm();
    setTimeout(() => {
      setHasSent(false);
    }, 5000);
  };

  return (
    <div className={style.contactContainer}>
      <div className="container py-5">
        <div className="pt-2 pb-4">
          <Title sectionTitle={"Contact Us"} />
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={onSubmitHandler}>
              <div>
                <Input
                  placeholder={"Name"}
                  inputName={"name"}
                  type={"text"}
                  value={enteredValues.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Input
                  placeholder={"Email"}
                  inputName={"email"}
                  type={"email"}
                  value={enteredValues.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <Input
                  placeholder={"Phone"}
                  inputName={"phone"}
                  type={"tel"}
                  maxLength={"11"}
                  value={enteredValues.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <Button styleName="sendBtn" styleText="sendText">
                Send
              </Button>
              {hasSent ? (
                <p className={style.hasSent}>Send Sussessfully!</p>
              ) : null}
            </form>
          </div>
          <div
            className={`${"col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-sm-center ps-lg-5 pt-md-0 pt-sm-4"} + ${
              style.infoContainer
            }`}
          >
            <div className="d-flex flex-row justify-content-center align-items-center mb-4">
              <i
                className={`${"fa-solid fa-envelope align-middle me-4"} + ${
                  style.icon
                }`}
              ></i>
              <a href="upskilling.eg1@gmail.com" className={style.info}>
                upskilling.eg1
                <span style={{ textDecoration: "underline" }}>@gmail.com</span>
              </a>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div>
                <i
                  className={`${"fa-solid fa-phone align-middle me-4"} + ${
                    style.icon
                  }`}
                ></i>
              </div>
              <div>
                <p className={style.info}>+20&nbsp;115&nbsp;493&nbsp;2137</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
