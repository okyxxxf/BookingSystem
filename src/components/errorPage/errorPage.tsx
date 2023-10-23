import React from "react";
import './errorPage.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-message">
        <div className="error-message__info">
          <h1 className="error-message__h1 h1">Упс! Что-то пошло не так</h1>
          <h2 className="error-message__h2 h2">Произошла ошибка или такой страницы не существует</h2>
          <p className="error-message__p p">
            <Link to=''>Вернуться на главную</Link>
          </p>
        </div>
        <div className="error-message__cat">
          <img src="https://static.miraheze.org/polandballruwiki/a/a2/Kittyguess.gif" alt='cat dance'/>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;