import React, { useEffect, useState } from "react";
import Button from "../../buttons/button";
import UserService from "../../../services/UserService";

const UserSettings = () => {
  const [nameInput, setName] = useState('Не указано');
  const [phoneInput, setPhone] = useState('Не указано');
  const [emailInput, setEmail] = useState('Не указано');

  const setFields = async () => {
    const service = new UserService();
    const res = await service.getResourse();
    const {username, email, phone} = res;

    if (!username) {} else setName(username); 
    if (!email) {} else setEmail(email); 
    if (!phone) {} else setPhone(phone); 
  }

  useEffect(() => {
    setFields();
  }, []);

  return (
    <div className="user-settings">
      <form className="user-settings__form" action="">
        <legend className="user-settings__h2 h2">Информация о профиле</legend>
        <label className="user-settings__p" htmlFor="name">Имя:</label>
        <input 
            className="input-text" 
            id="name"
            type="name"
            value= {nameInput}
            onChange={(e) => setName(e.target.value)}/>
        <label className="user-settings__p" htmlFor="phone-number">Номер телефона:</label>
        <input 
            className="input-text" 
            id="phone-number"
            type="name"
            value= {phoneInput}
            onChange={(e) => setPhone(e.target.value)}/>
        <label className="user-settings__p" htmlFor="e-mail">E-mail:</label>
        <input 
            className="input-text" 
            id="email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}/>
        <Button text='Изменить' type="white" onClick={() => {
          const service = new UserService();
          service.editResourse(nameInput, emailInput, phoneInput);
        }}/>
      </form>
    </div>
  )
};

export default UserSettings;