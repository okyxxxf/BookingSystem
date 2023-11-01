import React from "react";
import './filters.css';
import Button from "../../buttons/button";

interface filtersProps {
	closeWindow : Function,
	category : Array<string>
	selectCategory : Function,
	date : undefined | string,
	selectDate : Function,
}

const Filters = ({closeWindow, category, selectCategory, date, selectDate} : filtersProps) => {
	const categories = ['ОпенЭир', 'Вечеринка', 'Классическая музыка'];
	const renderCategories = categories.map((categoryName, i) => {
		if (category.includes(categoryName)) return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label category__label_active"
				onClick={() => 
				selectCategory([
					...category.slice(0, category.findIndex((item) => item === categoryName)),
					...category.slice(category.findIndex((item) => item === categoryName) + 1) 
				])}>{categoryName}</label>
			  <input type="checkbox" className="filters__input" name="category" id="openair-category" />
			</>
		)
		else return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label"
				onClick={() => selectCategory([...category, categoryName])}>{categoryName}</label>
			  <input type="checkbox" className="filters__input" name="category" id="openair-category" />
			</>
		)
	})

	return (
		<div className="modal">
			<div className="filters__wrapper">
				<div className="filters__info">
					<div className="filters__block">
						<label htmlFor="" className="filters__label">Категория:</label>
						<div className="filters__category">
							{renderCategories}
						</div>
					</div>
					<div className="filters__block">
						<label htmlFor="filter-date" className="filters__label">Дата:</label>
						<input type="date" className="filters__input" id="filter-date" value={date} onChange={(e) => selectDate(e.target.value)}/>
					</div>
					<Button text="Применить" type="default" onClick={() => closeWindow(false)}/>
				</div>
				<div className="cross-icon" onClick={() => closeWindow(false)}>x</div>
			</div>
		</div>
	)
};

export default Filters;

