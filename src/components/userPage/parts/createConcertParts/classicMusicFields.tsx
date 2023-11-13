import React from "react";

interface classicMusicFieldsProps {
	voiceType : string,
	selectVoice : Function,
}

const ClassicMusicFields = ({voiceType, selectVoice} : classicMusicFieldsProps) => {
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

	return (
		<>
		<label className="create-concert__p p" htmlFor="type">Тип голоса:</label>
			<div className="filters__category">
			{voiceTypeRender}
		</div>
	  </> 
	)
};

export default ClassicMusicFields;