import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { openLogin, openRegistration } from '../../../features/slices/modalSlice';

const AuthLink = () => {
	const dispatch = useAppDispatch();
	return (
		<>
			<div 
			className="registration"
			onClick={() => dispatch(openRegistration())}>Регистрация</div>
			<div className="interpunct">&#183;</div>
			<div 
			className="login"
			onClick={() => dispatch(openLogin())}>Вход</div>
		</>
	)
}

export default AuthLink;