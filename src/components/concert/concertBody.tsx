import React from "react";
import ticketIcon from './Vector.svg';
import Concert from "../../types/concert";

interface concertBodyPropsInterface {
  img? : boolean,
  description? : boolean,
  price? : boolean,
  status? : boolean,
  data : Concert,
}

const ConcertBody = ({ img, description, price, status, data } : concertBodyPropsInterface) => {
  const [ concert, additionalInfo ] = data;
  const { id, performer, ticketCount, date, place, concertType} = concert;
  return (
    <div className="concert">
        { img ? <div className='concert__image'></div> : null }
        <div className="concert__info">
          <h2 className="concert__h2 h2">{`${performer}`}</h2>
          <p className="concert__adress concert__p p">{place}</p>
          { description ? <p className="concert__p p">{`${performer} - ${date} - ${place}`}</p> : null }
        </div>
        <div className="concert__info">
            { price ? <AdditionalInfo ticketCount={ticketCount}/> : null }
            { status ? <div className="concert__status concert__status_booking">Забронировано</div> : null}
          <div className="concert__tags">
            <div className="concert__tag">{`${date}`}</div>
            <div className="concert__tag">{concertType}</div>
          </div>
        </div>
    </div>
  )
};

const AdditionalInfo = ({ticketCount } : {ticketCount : number}) => {
  return (
    <div className='concert__info-additional'>
      <div className="concert__price">25 рублей</div> 
      <div className="concert__tickets">{ticketCount} <img className='ticket-icon' src={ticketIcon} alt='ticket-icon'/></div>
    </div>
  )
}

export default ConcertBody;