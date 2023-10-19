import React, { useState } from "react";
import Button from "../../buttons/button";
import './login.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { setAuth } from "../../../features/slices/authSlice";
import { closeLogin } from "../../../features/slices/modalSlice";
import LoginService from "../../../services/authServices/LoginService";

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="modal__login modal">
      <div className="login__wrapper">
        <div 
        className="cross-icon"
        onClick={() => dispatch(closeLogin())}>x</div>
        <form className="user-settings__form" action="">
          <legend className="user-settings__h2 login__h2">Авторизация</legend>
          <label className="user-settings__p" htmlFor="name">Логин:</label>
          <input 
            className="input-text" 
            id="name"
            type="name"
            value= {name}
            onChange={(e) => setName(e.target.value)}/>
          <label className="user-settings__p" htmlFor="password">Пароль:</label>
          <input 
            className="input-text" 
            id="password"
            type="password"
            value= {password}
            onChange={(e) => setPassword(e.target.value)}/>
          <div className="login__button">
            <Button text='Войти' type="white" onClick={async (e) => { 
              e.preventDefault();
              const service = new LoginService()
              service.login(name, password)
                .then((token) => {
                  dispatch(setAuth());
                  localStorage.setItem('auth-token', token['auth_token']);
                })
                .catch(() => navigate('/error'));
              dispatch(closeLogin());
            }}/>
          </div>
          <div className="login__line line"></div>
          <div className="user-settings__p login__p">Еще нет аккаунта?</div>
        </form>
      </div>
    </div>
  )
};

export default Login;