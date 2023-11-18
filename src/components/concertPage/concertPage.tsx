import React, { useEffect, useState } from "react";
import './concertPage.css';
import Button from "../buttons/button";
import { useParams } from "react-router-dom";
import Concert from "../../types/concert";
import ConcertService from "../../services/ConcertService";
import BookingService from "../../services/BookingService";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import AdditionalInfo from "./additionalInfo";
import Geocoder from "../../services/DecoderService";

const ConcertPage = () => {
  const [concert, getConcert] = useState<Concert>();
  const [cords, setCords] = useState();
  const { concertId } = useParams();

  useEffect(() => {
    const service = new ConcertService();
    service.getResourse(+concertId!).then((concert) => {
      getConcert(concert);
    })
    .catch();
  }, [concertId]);

  useEffect(() => {
    const getConcertCoordinates = async () => {
			if (!concert) return;
			const geocoder = new Geocoder();
			const coordObject = await geocoder.getResourse(concert[0].place);
			return coordObject.response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
    }
		getConcertCoordinates()
      .then((cord) => {
        setCords(cord?.split(' ').reverse().map((cord : any) => +cord))
      })
  }, [concert]);

  if (!Array.isArray(concert)) return <div className="loader">Подождите пожалуйста...</div>

  const [baseInfo, additionalInfo] = concert!;
  const {name, image, price, place, date, concert_type, tickets_count} = baseInfo!;
  const concertTypes = {'CM' : 'Классическая музыка', 'OA' : 'ОпенЭир', 'P' : 'Вечеринка'};
  const concertType = concertTypes[concert_type];

  return (
    <div className="concert-page">
      <div className="concert-page__info">
        <div className="concert-page__wrapper">
          <div>
            <h2 className="concert__h2 h2">{name}</h2>
            <h2 className="concert__h2 h2">{price} рублей</h2>
            <p className="concert-page__p p">{place}</p>
            <p className="concert-page__p p">{concertType} &#183; {date.toString()}</p>
            <p className="concert-page__p p">Осталось билетов - {tickets_count}</p>
          </div>
          <div className="concert-page__images">
        <img src={image} alt={name} />
      </div>
        </div>
        <div className="concert-page__inputs">
          <Button text='Забронировать билет' type='white' onClick={() => {
            const service = new BookingService();
            service.createResourse(concertId);
          }}/>
        </div>
      </div>
      <div className="concert-page__addition-info">
          <AdditionalInfo additionalInfo={additionalInfo}/>
        </div>
        <div className="concert-page__map">
          <h2 className="concert__h2 h2">Расположение на карте</h2>
          <div className="concert__map">
            <YMaps
              query={{
                apikey: '3077528e-7089-4623-a1df-7121ad860030'
              }}>
              <div className="concert-page__map" id='map'>
                <Map
                  defaultState={{ 
                    center: cords,
                    zoom: 12 
                  }}
                  width={'300px'}
                  height={'300px'}>
                    <Placemark defaultGeometry={cords}
                    options={{
                      iconImageSize: [30, 30],
                      draggable: true,
                      preset: "islands#greenIcon",
                    }}
                    properties={{
                      hintContent: name,
                      balloonContent: `${concert[0]?.place}`
                    }} 
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
    </div>
  )
}

export default ConcertPage;