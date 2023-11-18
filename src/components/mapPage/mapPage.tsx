import React, { useState, useEffect } from "react";
import './mapPage.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAllConcert } from "../../features/slices/concertsSlice";
import Geocoder from "../../services/DecoderService";

const MapPage = () => {
	const concerts = useAppSelector(state => state.concerts.concerts);
  const [cords, getCords] = useState<Array<any>>([]);
	const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllConcert())
  }, [dispatch]);

	useEffect(() => {
		const getConcertCoordinates = async () => {
			if (!concerts) return;
			const geocoder = new Geocoder();
			const concertCoordinates = await Promise.all(
				concerts.map(async (concert) => {
					const coordObject = await geocoder.getResourse(concert[0].place);
					return coordObject.response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
				})
			);
			getCords(concertCoordinates);
		};
	
		getConcertCoordinates();
	}, [concerts]);

  const points = cords.map((cord : any, i : number) => {
		let name = 'Концерт';
		let id = 0;
		if (concerts !== null) {
			name = concerts[i][0].name;
			id = concerts[i][0].id!;
		}
	  return <Placemark 
	    defaultGeometry={cord?.split(' ').reverse().map((cord : any) => +cord)} 
			key={i} 
			options={{
				iconImageSize: [30, 30],
				draggable: true,
				preset: "islands#greenIcon",
			}}
			properties={{
				hintContent: name,
				balloonContent: `<a href=${`/concerts/${id}`}>${name}</a>`
			}} 
			modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
	});

	return (
		<div className="map-page">
			<h1 className="map__h1 h1">Карта концертов</h1>
			<YMaps
			  query={{
					apikey: '3077528e-7089-4623-a1df-7121ad860030'
  			}}>
				<div className="map-page__map" id='map'>
					<Map
					defaultState={{ 
						center: [53.9, 27.5667],
						 zoom: 9 }}
					width={'100%'}
					height={'100%'}>
							{points}
					</Map>
				</div>
			</YMaps>
		</div>
	)
};

export default MapPage;