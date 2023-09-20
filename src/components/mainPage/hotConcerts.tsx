import React from 'react';
import './assets/css/hotConcerts.css'
import fire from './assets/svgs/noto_fire.svg'
import Button from '../buttons/button';

const HotConcerts = () => {
  return (
    <section className='hot-concerts__section section'>
      <h2 className='hot-concert__h2 h2'>
        Популярно сейчас
        <img className='icon-fire'  src={fire} alt='fire'/>
      </h2>
      <div className='hot-concert__cards cards'>
        <div className='hot-concert__card card'>
          <img className='card__img' src={fire} alt='' />
          <h3 className='card__h3 h3'>Название концерта</h3>
          <p className='card__p p'>Тип: опэнеир</p>
          <p className='card__p p'>Дата: 11.11.2023</p>
          <p className='card__p p'>Цена: 25руб.</p>
        </div>
        <div className='hot-concert__card card'>
          <img className='card__img' src={fire} alt='' />
          <h3 className='card__h3 h3'>Название концерта</h3>
          <p className='card__p p'>Тип: опэнеир</p>
          <p className='card__p p'>Дата: 11.11.2023</p>
          <p className='card__p p'>Цена: 25руб.</p>
        </div>
        <div className='hot-concert__card card'>
          <img className='card__img' src={fire} alt='' />
          <h3 className='card__h3 h3'>Название концерта</h3>
          <p className='card__p p'>Тип: опэнеир</p>
          <p className='card__p p'>Дата: 11.11.2023</p>
          <p className='card__p p'>Цена: 25руб.</p>
        </div>
      </div>
      <Button text={'Выбрать билет'} type={'white'} />
    </section>
  )
};

export default HotConcerts;