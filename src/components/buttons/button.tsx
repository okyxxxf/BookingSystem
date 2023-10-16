import React, { MouseEventHandler } from 'react';
import './button.css';

interface buttonpropsInterface {
	text : string,
	type : 'default' | 'white',
	onClick : MouseEventHandler<HTMLButtonElement>,
}


const Button = ({text, type, onClick} : buttonpropsInterface) => {
	return (
		<button onClick={onClick} className={`${type}-button button`}>{text}</button>
	)
};

export default Button;