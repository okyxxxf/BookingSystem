import React from "react";
import Input from "../../inputs/input";
import Button from "../../buttons/button";
import './login.css';

const Login = ({closeLogin} : {closeLogin : Function}) => {
  return (
    <div className="modal__login modal">
      <div className="login__wrapper">
        <div 
        className="cross-icon"
        onClick={() => closeLogin(false)}>x</div>
        <form className="user-settings__form" action="">
          <legend className="user-settings__h2 login__h2">Авторизация</legend>
          <label className="user-settings__p" htmlFor="name">Имя:</label>
          <Input value={''} id="name"/>
          <label className="user-settings__p" htmlFor="password">Пароль:</label>
          <Input value={''} id="password" type="password"/>
          <div className="login__button">
            <Button text='Войти' type="white" onClick={() => {}}/>
          </div>
          <div className="login__line line"></div>
          <div className="user-settings__p login__p">Еще нет аккаунта?</div>
        </form>
      </div>
    </div>
  )
};

export default Login;