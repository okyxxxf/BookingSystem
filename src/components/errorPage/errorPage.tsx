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
          <img src="https://s3-alpha-sig.figma.com/img/a3b8/1429/d85b7ae2fd3f237d533404cce2228af7?Expires=1697414400&Signature=JMRpR-1Aoe5g5ukpmEfpRaKgTZo9G9qsJWN6kn4ES~NYzwMzG8FSj-dD3KNAhICbfeUPYNpOeozm-tNvVJJtsR0f2L2-cmecMTvk-iYoq0i4FRO2aKzBW98BplIyHeGPLlsgraE3Ev4Iw-wUqGZAXhgHceHVwYoCcB2nkKW6Nhs~BgLmVjKJTbV5L3HsemEPLvFFX1QKeLzpufdHBG8WjXVnsvluM-8XxAy4P~E2v7ZTCrUUUeWEj3PMOX-CcESzArAGFsgdxSM~wkvsVMJUsD5OZIEXOg-1dwWV473ms~M5eK5RRv5QQ7lqPnuluE98oCwNoUDVx55b8kMPBPVIcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='cat dance'/>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;