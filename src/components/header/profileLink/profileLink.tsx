import React from 'react';
import { Link } from 'react-router-dom';
import './profileLink.css';

const ProfileLink = () => {
	return (
		<div className='profile-link__dropdown'>
			<Link className="profile-link__link " to='user' >
				Профиль
			</Link>
		</div>
	)
};

export default ProfileLink;