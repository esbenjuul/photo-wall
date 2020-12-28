import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./input.scss";

const Input = ({
  id = uuidv4(),
  value = "",
  changeHandler,
  label,
  type = "text",
  name,
}) => {
  const [val, setVal] = useState(value);
  const onChange = ({ target }) => {
    if (changeHandler) {
      changeHandler(target.value);
    }
    setVal(target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={val}
        onChange={onChange}
        autoComplete="off"
        name={name}
      />
    </div>
  );
};

export default Input;
