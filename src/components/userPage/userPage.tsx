import React from 'react';
import ticketIcon from './assets/svg/Vector.svg';
import settingIcon from './assets/svg/setting.svg';
import exitIcon from './assets/svg/exit.svg';
import './assets/css/userPage.css';
import UserBookings from './parts/userBookings';
import UserSettings from './parts/userSetting';

const UserPage = () => {
	return (
		<div className="user-page">
			<aside className="user-buttons">
				<ul className='user-buttons__list list'>
					<li className="user-buttons__element user-buttons__element_active">
						<img src={ticketIcon} alt='ticket icon'/> Мои бронирования
					</li>
					<li className="user-buttons__element">
						<img src={settingIcon} alt='setting icon'/> Настройки профиля
					</li>
					<li className="user-buttons__element">
						<img src={exitIcon} alt='exit icon'/> Выйти из аккаунта
					</li>
				</ul>
			</aside>
			<div className="user__content">
				<UserBookings/>
				<UserSettings/>
			</div>
		</div>
	)
};

export default UserPage;