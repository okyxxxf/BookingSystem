import React from "react";
import './mapPage.css';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const MapPage = () => {
	return (
		<div className="map-page">
			<h1 className="map__h1 h1">Карта концертов</h1>
			<YMaps>
				<div className="map-page__map" id='map'>
					<Map
					defaultState={{ 
						center: [55.75, 37.57],
						 zoom: 9 
					}}
					width={'100%'}
					height={'100%'}/>
				</div>
			</YMaps>
		</div>
	)
};

export default MapPage;