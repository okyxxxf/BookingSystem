import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../mainPage/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../searchPage/searchPage';
import ErrorPage from '../errorPage.tsx/errorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorPage />}/>
          <Route path='' element={<MainPage/>}/>
          <Route path='concerts' element={<SearchPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
