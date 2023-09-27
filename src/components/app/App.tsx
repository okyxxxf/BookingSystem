import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../mainPage/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../searchPage/searchPage';
import ErrorPage from '../errorPage/errorPage';
import ConcertPage from '../concertPage/concertPage';
import MapPage from '../mapPage/mapPage';
import UserPage from '../userPage/userPage';
import Login from '../modals/login/logit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorPage />}/>
          <Route path='' element={<MainPage/>}/>
          <Route path='map' element={<MapPage/>} />
          <Route path='concerts' element={<SearchPage/>}/>
          <Route path='concerts/:concertId' element={<ConcertPage/>}/>
          <Route path='user' element={<UserPage/>}/>
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
