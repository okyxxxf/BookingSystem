import React from "react";
import Concert from "../concert/concert";
import './assets/css/concerts.css';

const Concerts = () => {
  return (
    <div className="concerts">
      <Concert type={'big'}/>
      <Concert type={'big'}/>
      <Concert type={'big'}/>
      <Concert type={'big'}/>
    </div>
  )
};

export default Concerts;