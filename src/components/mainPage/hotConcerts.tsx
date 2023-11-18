import React, { useEffect, useState } from 'react';
import './assets/css/hotConcerts.css'
import fire from './assets/svgs/noto_fire.svg'
import Button from '../buttons/button';
import { useNavigate } from 'react-router';
import ConcertType from '../../types/concertType';
import ConcertService from '../../services/ConcertService';

const HotConcerts = () => {
  const [concerts, setConcerts] = useState<Array<ConcertType>>()
  const navigate = useNavigate();

  const getConcerts = async () => {
    const service = new ConcertService();
    setConcerts(await service.getHotResourse());
  }

  useEffect(() => {
    getConcerts();
  });

  const concertRender = concerts?.map(concert => (
    <div className='hot-concert__card card' onClick={() => navigate(`/concerts/${concert.id}`)}>
      <img className='card__img' src={concert.image} alt='' />
      <h3 className='card__h3 h3'>{concert.name}</h3>
      <p className='card__p p'>Дата: {concert.date.toString()}</p>
      <p className='card__p p'>Цена: {concert.price}руб.</p>
    </div>
  ));

  return (
    <section className='hot-concerts__section section'>
      <h2 className='hot-concert__h2 h2'>
        Популярно сейчас
        <img className='icon-fire'  src={fire} alt='fire'/>
      </h2>
      <div className='hot-concert__cards cards'>
       {concertRender ? concertRender : null}
      </div>
      <Button text={'Выбрать билет'} type={'default'} onClick={() => navigate('/concerts')}/>
    </section>
  )
};

export default HotConcerts;