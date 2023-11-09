import React, { useState } from "react";
import Button from "../../buttons/button";
import BasicConcertFields from "./createConcertParts/basicConcertFields";
import ConcertService from "../../../services/ConcertService";
import convertImageToBase64 from "./createConcertParts/convertImageToBase64";

const CreateConcert = () => {
  const [errorMessage, setErrorMessage] = useState('');
	const [performer, setPerformer] = useState('');
	const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [place, setPlace] = useState('');
	const [description, setDescription] = useState('');
	const [count, setCount] = useState(1);
	const [price, setPrice] = useState(1);
	const [img, setImg] = useState<File>(new File([],'imga'));
	const [ageLimit, setAgeLimit] = useState(12);
	const [directions, setDirections] = useState('');
	const [headliner, setHeadliner] = useState('');

	const [category, selectCategory] = useState< 'P' | 'OA' | 'CM' >('P');
	const [voiceType, selectVoice] = useState< 'A' | 'T' | 'B'>('A');

	const voiceTypes = ['Альт', 'Тенор', 'Бас'];
	const voiceTypesValues : Array<'A' | 'T' | 'B'>= ['A', 'T', 'B'];
	const voiceTypeRender = voiceTypes.map((voice, i) => {
		if (voiceType === voiceTypesValues[i]) return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label category__label_active"
				onClick={() => selectVoice(voiceTypesValues[i])}
				>{voice}</label>
			  <input type="radio" className="filters__input" name="category" id="openair-category" value={voiceTypesValues[i]} />
			</>
		)
		else return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label"
				onClick={() => selectVoice(voiceTypesValues[i])}>{voice}</label>
			  <input type="radio" className="filters__input" name="category" id="openair-category" value={voiceTypesValues[i]} />
			</>
		)
	})

	const categories = ['ОпенЭир', 'Вечеринка', 'Классическая музыка'];
	const categoriesValues : Array<'OA' | 'P' | 'CM'>= ['OA', 'P', 'CM'];
	const renderCategories = categories.map((categoryName, i) => {
		if (category === categoriesValues[i]) return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label category__label_active"
				onClick={() => selectCategory(categoriesValues[i])}
				>{categoryName}</label>
			  <input type="radio" className="filters__input" name="category" id="openair-category" value={categoriesValues[i]} />
			</>
		)
		else return (
			<>
			  <label htmlFor="openair-category" key={i}
				className="filters__label category__label"
				onClick={() => selectCategory(categoriesValues[i])}>{categoryName}</label>
			  <input type="radio" className="filters__input" name="category" id="openair-category" value={categoriesValues[i]} />
			</>
		)
	})

  return (
		<div className="create-concert">
      <form className="create-concert__form" action="">
        <legend className="create-concert__h2 h2">Создать концерт</legend>
        <BasicConcertFields 
				renderCategories={renderCategories} 
				date={date}
				performer={performer}
				place={place}
				tickets_count={count}
				price={price}
				name={name}
				description={description}
				setCount={setCount}
				setDescription={setDescription}
				setDate={setDate}
				setName={setName}
				setPrice={setPrice}
				setPerformer={setPerformer}
				setPlace={setPlace}
				setImg={setImg}
				concert_type={category}
				/>

			{category === 'P' ? 
				<>
					<label className="create-concert__p p" htmlFor="cenz">Возратное ограничение:</label>
					<input  
							className="input-text" 
							id="cenz"
							type="number"
							min="12"
							max="60"
							value={ageLimit}
							onChange={e => setAgeLimit(+e.target.value)}/>
				</> : null}
			{category === 'OA' ? 
				<>
					<label className="create-concert__p p" htmlFor="directions">Как добраться:</label>
					<input  
							className="input-text" 
							id="directions"
							type="text"
							value={directions}
							onChange={e => setDirections(e.target.value)}/>
					<label className="create-concert__p p" htmlFor="headliner">Хедлайнер:</label>
					<input  
							className="input-text" 
							id="headliner"
							type="text"
							value={headliner}
							onChange={e => setHeadliner(e.target.value)}/>
				</> : null}
			{category === 'CM' ? 
				<>
					<label className="create-concert__p p" htmlFor="type">Тип голоса:</label>
						<div className="filters__category">
						{voiceTypeRender}
					</div>
				</> : null}
        
        <div className="error__message">{errorMessage.toString()}</div>
        <Button text='Создать' type="white" onClick={async (e) => {
					e.preventDefault();
					convertImageToBase64(img).then((image) => {
						const service = new ConcertService();
						const newConcert : any = [
							{
								performer : performer,
								tickets_count : count,
								price : price,
								date : date,
								place : place,
								concert_type : category,
								name : name,
								description : description,
								image : image,
							}
						];
						if (newConcert[0].concert_type === 'CM') 
							newConcert.push({
								voiceType : voiceType,
								name : name,
								composer : performer,
							});
						
						if (newConcert[0].concert_type === 'P') 
							newConcert.push({
								age_limit : ageLimit,
							});
	
						if (newConcert[0].concert_type === 'OA') 
							newConcert.push({
								directions : directions,
								headliner : headliner,
							});
						
						service.createResourse(newConcert)
						.then()
						.catch(err => setErrorMessage(err));
					})
				}}/>
      </form>
    </div>
	)
}

export default CreateConcert;