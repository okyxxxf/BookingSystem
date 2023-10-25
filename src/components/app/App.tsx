import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../mainPage/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../searchPage/searchPage';
import ErrorPage from '../errorPage/errorPage';
import ConcertPage from '../concertPage/concertPage';
import MapPage from '../mapPage/mapPage';
import UserPage from '../userPage/userPage';
import Login from '../modals/login/login';
import Registration from '../modals/registration/registration';
import { useAppSelector } from '../../hooks/hooks';
import './App.css';


function App () {
  const isOpenLogin = useAppSelector(state => state.modal.isOpenLogin);
  const isOpenRegistration = useAppSelector(state => state.modal.isOpenRegistration);

  document.body.style.overflow = 'auto';
  if (isOpenLogin || isOpenRegistration) document.body.style.overflow = 'hidden';
  return (
    <BrowserRouter>
      <div className="App">
      {isOpenLogin ? <Login /> : null}
      {isOpenRegistration ? <Registration /> : null}
        <Header/>
        {/* <Routes>
          <Route path="*" element={<ErrorPage />}/>
          <Route path='' element={<MainPage/>}/>
          <Route path='map' element={<MapPage/>} />
          <Route path='concerts' element={<SearchPage/>}/>
          <Route path='concerts/:concertId' element={<ConcertPage/>}/>
          <Route path='user' element={<UserPage/>}/>
        </Routes> */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
