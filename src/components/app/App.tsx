import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../main-page/mainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
