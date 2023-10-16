import React, {useEffect, useState} from "react";
import './header.css';
import { Link, useLocation } from "react-router-dom";

interface headerProps {
  openCloseLogin : Function,
  openCloseRegistration : Function
}


const Header = ({ openCloseLogin, openCloseRegistration} : headerProps) => {
  const urlNow = useLocation();
  const bars = ['Главная', 'Концерты', 'Карта концертов'];
  const barsLink = ['', 'concerts', 'map'];
  const [activeBar, setActive] = useState(barsLink[0]);

  useEffect(() => {
    setActive(urlNow.pathname.slice(1));
  }, [urlNow.pathname]);

  const barsRender = barsLink.map((barLink, i) => {
    if (activeBar === barLink) return (
      <li key={i} className="header__element element header__element_active">
        <Link to={barLink}>{bars[i]}</Link>
      </li>
    )
    return (
      <li key={i} className="header__element element">
        <Link to={barLink}>{bars[i]}</Link>
      </li>
    )
  })

  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="header__list list">
          {barsRender}
        </ul>
      </nav>
      <div className="user-info">
        <div 
        className="registration"
        onClick={() => {openCloseRegistration(true)}}>Регистрация</div>
        <div className="interpunct">&#183;</div>
        <div 
        className="login"
        onClick={() => {openCloseLogin(true)}}>Вход</div>
      </div>
    </header>
  );
};

export default Header;