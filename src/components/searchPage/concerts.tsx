import React, { useEffect } from "react";
import Concert from "../concert/concert";
import './assets/css/concerts.css';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAllConcert } from "../../features/slices/concertsSlice";

const Concerts = () => {
  const concerts = useAppSelector((state) => state.concerts.concerts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllConcert());
  }, [dispatch]);

  useEffect(() => {
  }, [concerts]);

  return (
    <div className="concerts">
      {concerts && concerts.map((concert, i) => {
        return (
          <Concert type="big" data={concert} key={i}/>
        )
      })}
    </div>
  )
};

export default Concerts;