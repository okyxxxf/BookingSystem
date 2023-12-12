import React from 'react';
import './concert.css';
import ConcertBody from './concertBody';
import concert from '../../types/concert';

interface concertPropsInterface {
  type : 'small' | 'big',
  status? : boolean,
  data : concert,
  statusText? : string,
  transactionId? : number,
}

const Concert = ({type, data, statusText, transactionId} : concertPropsInterface) => {
  if (type === 'small') {
    return (
      <>
        <ConcertBody status stausText={statusText} data={data} crossIcon transationId={transactionId}/>
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