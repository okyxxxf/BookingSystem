import React from "react";
import './assets/css/mapSection.css';
import Button from "../buttons/button";

const MapSection = () => {
	return (
		<section className="section__map section">
			<h2 className="map__h2 h2">Карта концертов</h2>
			<div className="map__wrapper">
				<div className="map__map"></div>
				<div className="map__info">
					<p className="map__p p">Удобная карта проходящих концертов поможет найти интересующий вас концерт прямо на карте, узнать как добраться до точки проведения мероприятия, дополнительную информацию и прочитать отзывы!</p>
					<Button text={'Открыть полную карту'} type={'default'} />
				</div>
			</div>
		</section>
	)
};

export default MapSection;