import React, { useState } from 'react';
import ticketIcon from './assets/svg/Vector.svg';
import settingIcon from './assets/svg/setting.svg';
import exitIcon from './assets/svg/exit.svg';
import './assets/css/userPage.css';
import UserBookings from './parts/userBookings';
import UserSettings from './parts/userSetting';
import { useAppDispatch } from '../../hooks/hooks';
import { disableAuth } from '../../features/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [openPart, changePart] = useState('Мои бронирования');
	
	const parts = ['Мои бронирования', 'Настройки профиля'];
	const partsIcon = [ticketIcon, settingIcon];
	const partsRender = parts.map((part, i) => {
		if (part === openPart) {
			return (
				<li key={i} className="user-buttons__element user-buttons__element_active" onClick={() => {changePart(part)}}>
					<img src={partsIcon[i]} alt='ticket icon'/> {part}
				</li>
			)
		} else 
		  return (
				<li key={i} className="user-buttons__element" onClick={() => {changePart(part)}}>
					<img src={partsIcon[i]} alt='ticket icon'/> {part}
				</li>
		  )
	});

	return (
		<div className="user-page">
			<aside className="user-buttons">
				<ul className='user-buttons__list list'>
					{partsRender}
					<li className="user-buttons__element" onClick={() => { 
						dispatch(disableAuth());
						navigate('/');
					}}>
						<img src={exitIcon} alt='exit icon'/> Выйти из аккаунта
					</li>
				</ul>
			</aside>
			<div className="user__content">
				{ openPart === 'Мои бронирования' ? <UserBookings/> : null }
				{ openPart === 'Настройки профиля' ? <UserSettings/> : null }
			</div>
		</div>
	)
};

export default UserPage;