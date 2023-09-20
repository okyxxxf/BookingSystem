import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../mainPage/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from '../error/error';
import SearchPage from '../searchPage/searchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorComponent />}/>
          <Route path='' element={<MainPage/>}/>
          <Route path='concerts' element={<SearchPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
