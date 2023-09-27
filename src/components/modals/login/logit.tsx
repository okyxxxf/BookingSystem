import React from "react";
import Input from "../../inputs/input";
import Button from "../../buttons/button";
import './login.css';

const Login = () => {
  return (
    <div className="modal__login modal">
      <div className="login__wrapper">
        <div className="cross-icon">X</div>
        <form className="user-settings__form" action="">
          <legend className="user-settings__h2 login__h2">Авторизация</legend>
          <label className="user-settings__p" htmlFor="name">Имя:</label>
          <Input value={''} id="name"/>
          <label className="user-settings__p" htmlFor="password">Пароль:</label>
          <Input value={''} id="password" type="password"/>
          <div className="login__button">
            <Button text='Войти' type="white"/>
          </div>
          <div className="login__line line"></div>
          <div className="user-settings__p login__p">Еще нет аккаунта?</div>
        </form>
      </div>
    </div>
  )
};

export default Login;