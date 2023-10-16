import React from "react";
import Input from "../../inputs/input";
import Button from "../../buttons/button";
import './registration.css';

const Registration = ({closeRegistration} : {closeRegistration : Function}) => {
  return (
    <div className="modal__login modal">
      <div className="login__wrapper">
        <div 
        className="cross-icon"
        onClick={() => closeRegistration(false)}>x</div>
        <form className="user-settings__form" action="">
          <legend className="user-settings__h2 login__h2">Регистрация</legend>
          <label className="user-settings__p" htmlFor="name">Имя:</label>
          <Input value={''} id="name"/>
					<label className="user-settings__p" htmlFor="phone-number">Номер телефона:</label>
        	<Input value={''} id="phone-number"/>
        	<label className="user-settings__p" htmlFor="e-mail">E-mail:</label>
        	<Input value={''} id="e-mail" type="email"/>
          <label className="user-settings__p" htmlFor="password">Пароль:</label>
          <Input value={''} id="password" type="password"/>
					<label className="user-settings__p" htmlFor="password-confirm">Подтвердите пароль:</label>
          <Input value={''} id="password-confirm" type="password"/>
          <div className="login__button">
            <Button text='Зарегестрироваться' type="white" onClick={() => {}}/>
          </div>
          <div className="login__line line"></div>
          <div className="user-settings__p login__p">Еще нет аккаунта?</div>
        </form>
      </div>
    </div>
  )
};

export default Registration	;