import React from 'react';
import { Link } from 'react-router-dom';
import './burgerMenu.css';

interface burgerMenuProps {
	bars : Array<string>,
	barsLink : Array<string>,
}

const BurgerMenu = ({bars, barsLink} : burgerMenuProps) => {
	const renderBars = bars.map((bar, i) => {
		return (
			<li className='burger-menu__element' key={i}>
				<Link to={barsLink[i]}>{bar}</Link>
			</li>
		)
	});

	return (
		<ul className="burger-menu">
			{renderBars}
		</ul>
	)
};

export default BurgerMenu;