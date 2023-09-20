import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="header__list list">
          <li className="header__element element">
            <Link to=''>Главная</Link>
          </li>
          <li className="header__element element">
            <Link to='concerts'>Концерты</Link>
            </li>
          <li className="header__element element">
            <Link to='map'>Карта концертов</Link>
            </li>
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