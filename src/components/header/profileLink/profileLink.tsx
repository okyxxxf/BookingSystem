import React from 'react';
import { Link } from 'react-router-dom';
import './profileLink.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { disableAuth } from '../../../features/slices/authSlice';

const ProfileLink = () => {
	const dispatch = useAppDispatch();
	return (
		<div className='profile-link__dropdown'>
			<Link className="profile-link__link " to='user' >
				Профиль
				<b className='dropdown-icon'>{`>`}</b>
			</Link>
			<ul className='dropdown__content'>
				<li className="profile-link__element element">
					<Link className="dropdown__link" to='user'>Мои бронирования</Link>
				</li>
				<li className="profile-link__element element">
					<Link className="dropdown__link" to='user'>Настройки профиля</Link>
				</li>
				<li className="profile-link__element element">
					<Link 
					className="dropdown__link" 
					to='' 
					onClick={() => {dispatch(disableAuth())}}>Выйти из аккаунта</Link>
				</li>

			</ul>
		</div>
	)
};

export default ProfileLink;