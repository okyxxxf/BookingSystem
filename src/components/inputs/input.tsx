import React, { useState } from "react";
import InputpropsInterface from "./inputPropsInterface";

const Input = ({value, placeholder, id, type} : InputpropsInterface) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <input 
    className="input-text" 
    placeholder={placeholder}
    id={id}
    type={type}
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}/>
  )
};

export default Input;