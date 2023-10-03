import React from 'react';
import './concert.css';
import ConcertBody from './concertBody';
import concert from '../../types/concert';

interface concertPropsInterface {
  type : 'small' | 'big',
  status? : 'archive' | 'succes' | 'booking',
  data : concert,
}

const Concert = ({type, data} : concertPropsInterface) => {
  if (type === 'small') {
    return (
      <>
        <ConcertBody img status data={data}/>
      </>
    )
  }

  return (
    <>
      <ConcertBody img description price data={data}/>
    </>
  )


};

export default Concert;