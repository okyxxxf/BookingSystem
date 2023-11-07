import React, { useState } from "react";
import Button from "../../buttons/button";
import './registration.css';
import { useAppDispatch } from "../../../hooks/hooks";
import { closeRegistration } from "../../../features/slices/modalSlice";
import RegistrationService from "../../../services/authServices/RegistrationService";
import { setAuth } from "../../../features/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="modal__login modal">
      <div className="login__wrapper">
        <div 
        className="cross-icon"
        onClick={() => dispatch(closeRegistration())}>x</div>
        <form className="user-settings__form" action="">
          <legend className="user-settings__h2 login__h2">Регистрация</legend>
          <label className="user-settings__p" htmlFor="name">Логин:</label>
          <input 
            className="input-text" 
            id="name"
            type="name"
            value= {name}
            maxLength={20}
            minLength={6}
            onChange={(e) => setName(e.target.value)}/>
        	<label className="user-settings__p" htmlFor="e-mail">E-mail:</label>
        	<input 
            className="input-text" 
            id="email"
            type="email"
            value= {email}
            onChange={(e) => setEmail(e.target.value)}/>
          <label className="user-settings__p" htmlFor="password">Пароль:</label>
          <input 
            className="input-text" 
            id="password"
            type="password"
            value= {password}
            onChange={(e) => setPassword(e.target.value)}/>
					<label className="user-settings__p" htmlFor="password-confirm">Подтвердите пароль:</label>
          <input 
            className="input-text" 
            id="password-confirm"
            type="password"
            value= {passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}/>
          <div className="login__button">
            <Button text='Зарегестрироваться' type="white" onClick={async (e) => {
              e.preventDefault();
              const service = new RegistrationService()
              service.registration(name, email, password)
                .then((token) => {
                  dispatch(setAuth());
                  localStorage.setItem('auth-token', token['auth_token']);
                })
                .catch(() => navigate('/error'));
              dispatch(closeRegistration());
            }}/>
          </div>
          <div className="login__line line"></div>
          <div className="user-settings__p login__p">Еще нет аккаунта?</div>
        </form>
      </div>
    </div>
  )
};

export default Registration	;