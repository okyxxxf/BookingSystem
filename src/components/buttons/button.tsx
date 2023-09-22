import React from 'react';
import './button.css';

interface buttonpropsInterface {
	text : string,
	type : 'default' | 'white'
}


const Button = ({text, type} : buttonpropsInterface) => {
	return (
		<button className={`${type}-button button`}>{text}</button>
	)
};

export default Button;