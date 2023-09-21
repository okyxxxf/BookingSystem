import React from 'react';
import ticketIcon from './Vector.svg';
import './concert.css';

const Concert = () => {
  return (
    <div className="concert">
      <div className='concert__image'></div>
      <div className="concert__info">
        <h2 className="concert__h2 h2">Название концерта</h2>
        <p className="concert__adress concert__p p">ул. Бассейна, д. 24/2</p>
        <p className="concert__p p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam alias veritatis facilis repellat officia eos, quasi eaque animi exercitationem impedit id nisi recusandae, reprehenderit architecto suscipit ullam tempora? Iure.</p>
      </div>
      <div className="concert__info">
        <div className='concert__info-additional'>
          <div className="concert__price">25 рублей</div>
          <div className="concert__tickets">9999 <img className='ticket-icon' src={ticketIcon} alt='ticket-icon'/></div>
        </div>
        <div className="concert__tags">
          <div className="concert__tag">11.11.2023</div>
          <div className="concert__tag">Опэнэир</div>
        </div>
      </div>
    </div>
  )
};

export default Concert