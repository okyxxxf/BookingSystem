import React from 'react';
import './button.css';

interface buttonInterface {
	text : string,
	type : 'default' | 'white'
}


const Button = ({text, type} : buttonInterface) => {
	return (
		<button className={`${type}-button button`}>{text}</button>
	)
};

export default Button;