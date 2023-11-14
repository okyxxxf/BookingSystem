import React, { useEffect, useState } from "react";
import './concertPage.css';
import ticketIcon from './assets/svg/Vector.svg';
import Button from "../buttons/button";
import { useParams } from "react-router-dom";
import Concert from "../../types/concert";
import ConcertService from "../../services/ConcertService";
import ClassicMusicType from "../../types/classicMusic";
import OpenAirType from "../../types/openAir";
import PartyType from "../../types/party";

const ConcertPage = () => {
  const [concert, getConcert] = useState<Concert>();
  const { concertId } = useParams();

  useEffect(() => {
    const service = new ConcertService();
    service.getResourse(+concertId!).then((concert) => {
      getConcert(concert);
    })
    .catch();
  }, [concertId]);

  if (!Array.isArray(concert)) return <div className="loader">Подождите пожалуйста...</div >
  const [baseInfo, additionalInfo] = concert!;
  const {name, image, price, place, date, concert_type, tickets_count} = baseInfo!;
  const concertTypes = {'CM' : 'Классическая музыка', 'OA' : 'ОпенЭир', 'P' : 'Вечеринка'};
  const concertType = concertTypes[concert_type];
  const additionalInfoRender = [];

  function isClassicMusic (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is ClassicMusicType {
    return (additionalInfo as ClassicMusicType).name !== undefined;
  }

  if (isClassicMusic(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p">Композитор - {additionalInfo['composer' as keyof ClassicMusicType]}</p>);
    additionalInfoRender.push(<p className="concert-page__p p">Тип голоса - {additionalInfo['voiceType' as keyof ClassicMusicType]}</p>);
  } 

  function isOpenAir (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is OpenAirType {
    return (additionalInfo as OpenAirType).headliner !== undefined;
  }

  if (isOpenAir(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p" >Как добраться - {additionalInfo['directions' as keyof OpenAirType]}</p>);
    additionalInfoRender.push(<p className="concert-page__p p" >Хедлайнер - {additionalInfo['headliner' as keyof OpenAirType]}</p>);
  } 

  function isParty (additionalInfo : ClassicMusicType | OpenAirType | PartyType) : additionalInfo is PartyType {
    return (additionalInfo as PartyType).age_limit !== undefined;
  }

  if (isParty(additionalInfo)){
    additionalInfoRender.push(<p className="concert-page__p p" >Возрастной лимит - {additionalInfo["age_limit" as keyof PartyType]}</p>);
  } 


  console.log(additionalInfo);
  return (
    <div className="concert-page">
      <div className="concert-page__images">
        <img src={image} alt={name} />
      </div>
      <div className="concert-page__info">
        <div className="concert-page__wrapper">
          <div>
            <h2 className="concert__h2 h2">{name}</h2>
            <h2 className="concert__h2 h2">{price} рублей</h2>
            <p className="concert-page__p p">{place}</p>
            <p className="concert-page__p p">{concertType} &#183; {date.toString()}</p>
          </div>
          <p className="concert-page__p p">
            {`${tickets_count}`} <img src={ticketIcon} alt="ticket icon"/> 
          </p>
        </div>
        <div className="concert-page__inputs">
          <input  
          className="input-text" 
          style={{width : '30%'}}
          id="price"
          type="number"
          min="1"/>
          <Button text='Забронировать билет' type='white' onClick={() => {}}/>
        </div>
      </div>
      <div className="concert-page__addition-info">
        {additionalInfoRender}
      </div>
      <div className="concert-page__map">
        <h2 className="concert__h2 h2">Расположение на карте</h2>
        <div className="concert__map"></div>
      </div>
    </div>
  )
}

export default ConcertPage;