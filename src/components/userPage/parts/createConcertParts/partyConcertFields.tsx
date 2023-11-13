import React from 'react';

interface partyConcertFieldsProps {
	ageLimit : number,
	setAgeLimit : Function,
}

const PartyConcertFields = ({ageLimit, setAgeLimit} : partyConcertFieldsProps) => {
	return (
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
  </> 
	)
}

export default PartyConcertFields;