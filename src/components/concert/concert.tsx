import React from 'react';
import './concert.css';
import ConcertBody from './concertBody';

interface concertPropsInterface {
  type : 'small' | 'big',
  status? : 'archive' | 'succes' | 'booking',
}

const Concert = ({type} : concertPropsInterface) => {
  if (type === 'small') {
    return (
      <>
        <ConcertBody img status/>
      </>
    )
  }

  return (
    <>
      <ConcertBody img description price />
    </>
  )


};

export default Concert;