import React from "react";
import About from "./about";
import './assets/css/mainPage.css';
import HotConcerts from "./hotConcerts";
import MapSection from "./map";

const MainPage = () => {
  return (
    <>
      <About/>
      <HotConcerts/>
      <MapSection/>
    </>
  )
};

export default MainPage;