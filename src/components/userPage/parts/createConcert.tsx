import React, { useState } from "react";
import Button from "../../buttons/button";
import BasicConcertFields from "./createConcertParts/basicConcertFields";
import ConcertService from "../../../services/ConcertService";
import convertImageToBase64 from "./createConcertParts/convertImageToBase64";
import PartyConcertFields from "./createConcertParts/partyConcertFields";
import OpenAirFields from "./createConcertParts/openAirFields";
import ClassicMusicFields from "./createConcertParts/classicMusicFields";

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
					concert_type={category}/>
				{category === 'P' ? <PartyConcertFields ageLimit={ageLimit} setAgeLimit={setAgeLimit} />: null}
				{category === 'OA' ? <OpenAirFields 
					directions={directions} 
					setDirections={setDirections} 
					headliner={headliner}
					setHeadliner={setHeadliner} />
				: null}
				{category === 'CM' ? <ClassicMusicFields voiceType={voiceType} selectVoice={selectVoice}/> : null}
        <div className="error__message">{errorMessage.toString()}</div>

        <Button text='Создать' type="white" onClick={async (e) => {
					e.preventDefault();
					const image = await convertImageToBase64(img);
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
					switch (newConcert[0].concert_type) {
						case 'CM' :
							newConcert.push({ voiceType : voiceType, name : name, composer : performer });
							break;
						case 'P' :
							newConcert.push({ age_limit : ageLimit });
						  break;
						case 'OA' :
							newConcert.push({ directions : directions, headliner : headliner });
							break
					}					
					service.createResourse(newConcert)
					.then(() => {
						const form = document.querySelector('.create-concert__form');
						form?.querySelectorAll('input').forEach((input) => input.value = '');
					}).catch(err => setErrorMessage(err));
				}}/>
      </form>
    </div>
	)
}

export default CreateConcert;