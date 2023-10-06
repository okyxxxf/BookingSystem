import React, {useState} from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [activeBar, setActive] = useState(0);
  const bars = ['Главная', 'Концерты', 'Карта концертов'];
  const barsLink = ['', 'concerts', 'map'];

  const barsRender = bars.map((bar, i) => {
    if (activeBar === i) return (
      <li key={i} className="header__element element header__element_active">
        <Link to={barsLink[i]} onClick={() => setActive(i)}>{bar}</Link>
      </li>
    )
    return (
      <li key={i} className="header__element element">
        <Link to={barsLink[i]} onClick={() => setActive(i)}>{bar}</Link>
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
        onClick={() => {}}>Регистрация</div>
        <div className="interpunct">&#183;</div>
        <div className="login">Вход</div>
      </div>
    </header>
  );
};

export default Header;