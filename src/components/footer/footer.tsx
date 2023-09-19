import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='nav-bar'>
        <ul className='footer__list list'>
          <li className="footer__element element">Mail</li>
          <li className="footer__element element">Telegram</li>
          <li className="footer__element element">Designer</li>
          <li className="footer__element element">GitHub</li>
        </ul>
      </nav>
    </footer>
  )
};

export default Footer;