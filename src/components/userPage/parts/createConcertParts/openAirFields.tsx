import React from 'react';

interface openAirFieldsProps {
  directions : string,
	setDirections : Function,
	headliner : string,
	setHeadliner : Function,
}

const OpenAirFields = ({directions, setDirections, headliner, setHeadliner} : openAirFieldsProps) => {
	return (
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
		</>
	)
}

export default OpenAirFields;