import React, { useEffect, useState } from "react";
import Button from "../../buttons/button";
import UserService from "../../../services/UserService";
import { useAppDispatch } from "../../../hooks/hooks";
import { setAdminRole } from "../../../features/slices/adminSlice";

const UserSettings = () => {
  const [name, setName] = useState('Не указано');
  const [phone, setPhone] = useState('Не указано');
  const [email, setEmail] = useState('Не указано');
  const [loading, disableLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();

  const setFields = async () => {
    const service = new UserService();
    const res = await service.getResourse();
    disableLoading(false);
    const {username, email, phone, is_superuser} = res;

    if (!username) {} else setName(username); 
    if (!email) {} else setEmail(email); 
    if (!phone) {} else setPhone(phone); 

    if (is_superuser) dispatch(setAdminRole());
  }

  useEffect(() => {
    setFields();
  },);

  if (loading) return <div className="loader">Пожалуйста подождите...</div>

  return (
    <div className="user-settings">
      <form className="user-settings__form" action="">
        <legend className="user-settings__h2 h2">Информация о профиле</legend>
        <label className="user-settings__p" htmlFor="name">Имя:</label>
        <input 
            className="input-text" 
            id="name"
            type="name"
            value= {name}
            onChange={(e) => setName(e.target.value)}/>
        <label className="user-settings__p" htmlFor="phone-number">Номер телефона:</label>
        <input 
            className="input-text" 
            id="phone-number"
            type="name"
            value= {phone}
            onChange={(e) => setPhone(e.target.value)}/>
        <label className="user-settings__p" htmlFor="e-mail">E-mail:</label>
        <input 
            className="input-text" 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        <div className="error__message">{errorMessage.toString()}</div>
        <Button text='Изменить' type="white" onClick={(e) => {
          e.preventDefault();
          setErrorMessage('');
          const service = new UserService();
          service.editResourse({name, email, phone})
          .catch(error => setErrorMessage(error));
        }}/>
      </form>
    </div>
  )
};

export default UserSettings;