import React, { useState } from 'react';
import './mobileHeader.css';
import BurgerMenu from '../burgerMenu/burgerMenu';
import profileIcon from './profileIcon.svg';
import { useNavigate } from 'react-router-dom';

interface mobileHeaderProps {
	bars : Array<string>,
	barsLink : Array<string>,
}

const MobileHeader = ({bars, barsLink} : mobileHeaderProps) => {
	const [menuOpen, toggleMenu] = useState(false);
	const navigate = useNavigate();

	return (
		<header className="header header_mobile">
			<nav className="nav-bar nav-bar_mobile">
				<div 
				className={`burger-menu-icon ${menuOpen ? 'open' : ''}`}
				onClick={() => toggleMenu(!menuOpen)}>
					<div className="burger"></div>
				</div>

				<div 
				className="profile-icon"
				onClick={() => navigate('user/')}>
					<img src={profileIcon} alt="профиль" />
				</div>
			</nav>
			{menuOpen ? <BurgerMenu bars={bars} barsLink={barsLink}/> : null}
		</header>
	)
};

export default MobileHeader;