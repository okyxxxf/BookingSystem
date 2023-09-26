import React from "react";
import ticketIcon from './Vector.svg';

interface concertBodyPropsInterface {
  img? : boolean,
  description? : boolean,
  price? : boolean,
  status? : boolean,
}

const ConcertBody = ({img, description, price, status} : concertBodyPropsInterface) => {
  return (
    <div className="concert">
        { img ? <div className='concert__image'></div> : null }
        <div className="concert__info">
          <h2 className="concert__h2 h2">Название концерта</h2>
          <p className="concert__adress concert__p p">ул. Бассейна, д. 24/2</p>
          { description ? <p className="concert__p p">Lorem ipsum dolo</p> : null }
        </div>
        <div className="concert__info">
            { price ? <AdditionalInfo/> : null }
            { status ? <div className="concert__status concert__status_booking">Забронировано</div> : null}
          <div className="concert__tags">
            <div className="concert__tag">11.11.2023</div>
            <div className="concert__tag">Опэнэир</div>
          </div>
        </div>
    </div>
  )
};

const AdditionalInfo = () => {
  return (
    <div className='concert__info-additional'>
      <div className="concert__price">25 рублей</div> 
      <div className="concert__tickets">9999 <img className='ticket-icon' src={ticketIcon} alt='ticket-icon'/></div>
    </div>
  )
}

export default ConcertBody;