import React from "react";
import './concertPage.css';
import ticketIcon from './assets/svg/Vector.svg';
import Button from "../buttons/button";
import InputNumber from "../inputs/inputNumber";

const ConcertPage = () => {
  return (
    <div className="concert-page">
      <div className="concert-page__images">
        <div className="big-image"></div>
        <div className="small-image"></div>
        <div className="small-image"></div>
        <div className="small-image"></div>
        <div className="small-image"></div>
        <div className="small-image"></div>
        <div className="small-image"></div>
      </div>
      <div className="concert-page__info">
        <div className="concert-page__wrapper">
          <div>
            <h2 className="concert__h2 h2">Название концерта</h2>
            <h2 className="concert__h2 h2">25 долларов юсд</h2>
            <p className="concert-page__p p">ул. Басейна, д. 12</p>
            <p className="concert-page__p p">Опенэир &#183; 11.11.2023</p>
          </div>
          <p className="concert-page__p p">
            9999 <img src={ticketIcon} alt="ticket icon"/> 
          </p>
        </div>
        <div className="concert-page__inputs">
          <InputNumber value={1}/>
          <Button text='Забронировать билет' type='white' onClick={() => {}}/>
        </div>
      </div>
      <div className="concert-page__addition-info"></div>
      <div className="concert-page__map">
        <h2 className="concert__h2 h2">Расположение на карте</h2>
        <div className="concert__map"></div>
      </div>
    </div>
  )
}

export default ConcertPage;