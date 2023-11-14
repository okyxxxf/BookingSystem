import React, { useEffect, useState } from "react";
import Concert from "../concert/concert";
import './assets/css/concerts.css';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAllConcert } from "../../features/slices/concertsSlice";

interface concertsProps {
  searchValue : string,
  category : Array<string>,
  date : undefined | string,
}

const Concerts = ({searchValue, category, date} : concertsProps) => {
  const concertTypeValues = { 'CM' : 'Классическая музыка', 'OA' : 'ОпенЭир', 'P' : 'Вечеринка'};
  const [loading, disableLoading] = useState(true);
  const concerts = useAppSelector((state) => state.concerts.concerts);
  const dispatch = useAppDispatch();

  const avaibleConcerts = concerts?.filter((concert) => new Date(concert[0].date).getTime() > Date.now());

  const filteredConcerts = avaibleConcerts?.filter((concert) => 
    concert[0].name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 );

  const categoriziedConcerts = filteredConcerts?.filter((concert) => {
    if (category.length === 0) return true;
    return category.includes(concertTypeValues[concert[0].concert_type]);
  });
  
  const dateziedConcerts = categoriziedConcerts?.filter((concert) => {
    if (date === undefined) return true
    return date === concert[0].date.toString();
  });

  useEffect(() => {
    dispatch(fetchAllConcert())
    .then(() => disableLoading(false));
  }, [dispatch]);

  useEffect(() => {
  }, [concerts]);


  if (loading) return <div className="loader">Пожалуйста подождите...</div>
  return (
    <div className="concerts">
      {dateziedConcerts && dateziedConcerts.map((concert, i) => {

        return (
          <Concert type="big" data={concert} key={i}/>
        )
      })}
      {dateziedConcerts && dateziedConcerts.length > 0 ? null : <div className="concerts__error">Увы ничего не найдено</div>}
    </div>
  )
};

export default Concerts;