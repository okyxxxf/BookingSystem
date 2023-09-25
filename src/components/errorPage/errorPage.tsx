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
          <img src="https://s3-alpha-sig.figma.com/img/a3b8/1429/d85b7ae2fd3f237d533404cce2228af7?Expires=1696204800&Signature=F6xREn5G3d8ZqCyFFcP4tQ5Dgx4c8J7YX7V1Rro~RLv-8oDIkahNfuSV9Mko4mu4UMoJGP37TxawGXMKFoxMySo6HKqhwuIe26Y6gg3WNzbxyfnVjSQuTWWb4~blkjBw~t5ZBGvpofB4gX7gD1SFNt5nE9lmRZj8XEH~LjsNxfX1IjTNF7PdiXtElLeNL7T7lemI9bpjuabchsxqrK6Q5BpkyixH5lMeMl9JbdvoF1eh10V92sDKWCf38PKlmYlwYW881xqR-0p5DYStX-OkKFCXOB6Rcb~Ojnnvj-PMej4Y8nZ8tAGXDGye4z8Q45WaomH6ysmkKeRX08rRJol2xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='cat dance'/>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;