import React from "react";
import style from "./Input.module.css";

export default function Input({
  placeholder,
  inputName,
  onChange,
  type,
  value,
  maxLength,
}) {
  return (
    <div className="input-group mb-3">
      <input
        type={type}
        className={`${"form-control rounded-5 border-0 py-3 ps-4"} + ${
          style.input
        }`}
        placeholder={placeholder}
        name={inputName}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      />
    </div>
  );
}
