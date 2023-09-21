import React from "react";
import Concert from "../concert/concert";
import './assets/css/concerts.css';

const Concerts = () => {
  return (
    <div className="concerts">
      <Concert/>
      <Concert/>
      <Concert/>
      <Concert/>
      <Concert/>
    </div>
  )
};

export default Concerts;