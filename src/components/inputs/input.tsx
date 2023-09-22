import React from "react";
import './input.css';
import { useState } from "react";

interface InputpropsInterface {
  value : string | number,
  placeholder? : string 
}

const Input = ({value} : InputpropsInterface) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className="input">
      <input 
      className='input__input' 
      type='text'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}/>
      <div className="input__buttons">
        <button className="more-button input__button" type="button">^</button>
        <button className="less-button input__button" type="button">^</button>
      </div>
    </div>
  )
};

export default Input;