import React, { useEffect, useState } from 'react';
import BookingService from '../../../services/BookingService';
import Transaction from '../../../types/transaction';
import Concert from '../../concert/concert';
import ConcertService from '../../../services/ConcertService';
import * as ConcertType from '../../../types/concert';

const UserBookings = () => {
  const [bookings, changeBookings] = useState<Array<Transaction>>();
  const [concerts, changeConcerts] = useState<Array<ConcertType.default>>();
  const [loading, disableLoading] = useState(true);

  const getBookings = async () => {
    const service = new BookingService();
    const bookings = await service.getResourse();
    changeBookings(bookings);
  }

  const getConcerts = async () => {
    const result : Array<ConcertType.default> = []
    if (bookings) {
      const service = new ConcertService();
      const promises = bookings.map((booking) => service.getResourse(+booking.concert_id));
      const concerts = await Promise.all(promises);
      result.push(...concerts);
    }
    changeConcerts(result);
  }

  useEffect(() => {
    getBookings();
  }, [loading]);

  useEffect(() => {
    getConcerts().then(() => disableLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookings]);

  if (loading) return <div className="loader">Пожалуйста подождите...</div>

  return (
    <div className="user-bookings">
      {concerts && bookings && concerts.map((concert, i) => {
        return (
          <Concert type="small" data={concert} statusText={bookings![i].status} key={i} transactionId={bookings[i].id}/>
        )
      })}
    </div>
  )
};

export default UserBookings;