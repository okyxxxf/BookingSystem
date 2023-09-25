import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='nav-bar'>
        <ul className='footer__list list'>
          <li className="footer__element element">
            <a href="mailto:okyxxf@gmail.com">Mail</a>
          </li>
          <li className="footer__element element">
            <a href="https://t.me/okyxxxf">Telegram</a>
          </li>
          <li className="footer__element element">
            <a href="https://t.me/choorilo">Designer</a>
          </li>
          <li className="footer__element element">
            <a href="https://github.com/okyxxxf">GitHub</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
};

export default Footer;