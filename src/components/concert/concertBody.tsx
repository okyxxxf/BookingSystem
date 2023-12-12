import React from "react";
import ticketIcon from './Vector.svg';
import Concert from "../../types/concert";
import { useNavigate } from "react-router-dom";
import BookingService from "../../services/BookingService";

interface concertBodyPropsInterface {
  img? : boolean,
  description? : boolean,
  price? : boolean,
  status? : boolean,
  data : Concert,
  stausText? : string,
  crossIcon? : boolean,
  transationId? : number,
}

const ConcertBody = ({ img, description, price, status, data, stausText, crossIcon, transationId } : concertBodyPropsInterface) => {
  const concertTypeValues = { 'CM' : 'Классическая музыка', 'OA' : 'ОпенЭир', 'P' : 'Вечеринка'};
  const [ concert ] = data;
  const navigate = useNavigate();
  const { id, performer, tickets_count, date, place, concert_type, name, image } = concert;


  return (
    <div className="concert" key={id} onClick={() => navigate(`/concerts/${id}`)}>
        { crossIcon ? <div className="cross-icon" onClick={(e) => { 
          const service = new BookingService();
          e.stopPropagation();
          service.deleteResourse(transationId!);
          window.location.reload();
        }}>X</div> : null }
        { img ? <img className="concert__image" src={image} alt={name}/> : null }
        <div className="concert__info">
          <h2 className="concert__h2 h2">{`${name}`}</h2>
          <p className="concert__adress concert__p p">{performer}</p>
          <p className="concert__adress concert__p p">{place}</p>
          { description ? <p className="concert__p p">{`${concert.description}`}</p> : null }
        </div>
        <div className="concert__info">
            { price ? <AdditionalInfo ticketCount={tickets_count} price={concert.price} /> : null }
            { status ? <div className="concert__status concert__status_booking">{stausText}</div> : null}
          <div className="concert__tags">
            <div className="concert__tag">{`${date}`}</div>
            <div className="concert__tag">{concertTypeValues[concert_type]}</div>
          </div>
        </div>
    </div>
  )
};

const AdditionalInfo = ({ticketCount, price} : {ticketCount : number, price : number}) => {
  return (
    <div className='concert__info-additional'>
      <div className="concert__price">{`${price} рублей`}</div> 
      <div className="concert__tickets">{ticketCount}<img className='ticket-icon' src={ticketIcon} alt='ticket-icon'/></div>
    </div>
  )
}

export default ConcertBody;