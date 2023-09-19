import React from "react";
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="header__list list">
          <li className="header__element element">Главная</li>
          <li className="header__element element">Концерты</li>
          <li className="header__element element">Карта концертов</li>
        </ul>
      </nav>
      <div className="user-info">
        <div className="registration">Регистрация</div>
        <div className="interpunct">&#183;</div>
        <div className="login">Вход</div>
      </div>
    </header>
  );
};

export default Header;