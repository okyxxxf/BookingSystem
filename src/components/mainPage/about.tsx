import React from "react";
import kitten1 from "./assets/images/free-png1.png";
import kitten2 from "./assets/images/free-png2.png";
import './assets/css/about.css';

const About = () => {
  return (
    <section className="section section__about">
      <div className="about__info">
        <h1 className="about__h1 h1">Билеты на концерт</h1>
        <p className="about__text text">Удобный функционал, качественный поиск <br></br>по концертам, карта проходящих <br></br>концертов.</p>
      </div>
      <div className="about__kittens">
        <img className="kitten1 kitten" src={kitten1} alt="kitten1"/>
        <img className="kitten2 kitten" src={kitten2} alt="kitten2"/>
      </div>
    </section>
  )
};

export default About;