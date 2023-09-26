import React from "react";
import Button from "../../buttons/button";
import Input from "../../inputs/input";

const UserSettings = () => {
  return (
    <div className="user-settings">
      <form className="user-settings__form" action="">
        <legend className="user-settings__h2 h2">Информация о профиле</legend>
        <label className="user-settings__p" htmlFor="name">Имя:</label>
        <Input value={''} id="name"/>
        <label className="user-settings__p" htmlFor="phone-number">Номер телефона:</label>
        <Input value={''} id="phone-number"/>
        <label className="user-settings__p" htmlFor="e-mail">E-mail:</label>
        <Input value={''} id="e-mail" type="email"/>
        <label className="user-settings__p" htmlFor="password">Пароль:</label>
        <Input value={''} id="password" type="password"/>
        <Button text='Сохранить' type="white"/>
      </form>
    </div>
  )
};

export default UserSettings;