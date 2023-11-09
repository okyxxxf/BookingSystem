import React from "react";
import ConcertType from "../../../../types/concertType";

interface BasicConcertFieldsProps extends ConcertType {
	renderCategories : Array<React.ReactNode>,
	setPerformer : Function,
	setDate : Function,
	setPlace : Function,
	setCount : Function,
	setPrice : Function,
	setName : Function,
	setDescription : Function,
	setImg : Function,
}

const BasicConcertFields = ({
	performer,
	date, 
	name, 
	place, 
	description, 
	tickets_count, 
	price, 
	renderCategories,
	setPerformer,
	setDate,
	setPlace,
	setCount,
	setPrice,
	setName,
	setDescription,
	setImg,
	image
} : BasicConcertFieldsProps) => {
  return (
		<>
			<label className="create-concert__p p" htmlFor="performer">Исполнитель:</label>
			<input 
				className="input-text" 
				id="performer"
				type="text"
				value={performer}
				onChange={e => setPerformer(e.target.value)}/>
			<label className="create-concert__p p" htmlFor="date">Дата концерта:</label>
			<input 
				className="input-text" 
				id="date"
				type="date"
				value={date.toString()}
				onChange={e => setDate(e.target.value)}/>
			<label className="create-concert__p p" htmlFor="name">Название концерта:</label>
			<input 
				className="input-text" 
				id="name"
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}/>		
			<label className="create-concert__p p" htmlFor="place">Место проведения:</label>
			<input 
				className="input-text" 
				id="place"
				type="text"
				value={place}
				onChange={e => setPlace(e.target.value)}/>		
			<label className="create-concert__p p" htmlFor="description">Описание:</label>
			<input 
				className="input-text" 
				id="description"
				type="textarea"
				value={description}
				onChange={e => setDescription(e.target.value)}/>	
			<label className="create-concert__p p" htmlFor="image">Изображение:</label>
			<input 
				accept="image/png, image/jpeg" 
				className="input-text" 
				id="image"
				type="file"
				onChange={e => {
					setImg(e.target.files![0])}}/>
			<label className="create-concert__p p" htmlFor="count">Колличество билетов:</label>
			<input  
				className="input-text" 
				id="count"
				type="number"
				min="1"
				value={tickets_count}
				onChange={e => setCount(+e.target.value)}/>
			<label className="create-concert__p p" htmlFor="price">Цена:</label>
			<input  
				className="input-text" 
				id="price"
				type="number"
				min="1"
				value={price}
				onChange={e => setPrice(+e.target.value)}/>
			<label className="create-concert__p p" htmlFor="type">Тип концерта:</label>
			<div className="filters__category">
				{renderCategories}
			</div>
		</>
	)
}

export default BasicConcertFields;