import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../main-page/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='' element={<MainPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
