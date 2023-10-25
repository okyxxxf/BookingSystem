import React from 'react';
import filterIcon from './assets/svg/mi_filter.svg';
import searchIcon from './assets/svg/octicon_search-16.svg';
import crossIcon from './assets/svg/x.svg'
import './assets/css/searchPanel.css';

const SearchPanel = () => {
  return (
    <article className='search-panel'>
      <div className='search__wrapper'>
        <div className='search'>
          <img className='search__icon' src={searchIcon} alt="search-icon"/>
          <input className='search__input' type="text" />
        </div>
        <div className='search__filters'>
          <div className='filter__button'>
            <img className='filter-icon' src={filterIcon} alt='filter-icon'/>
            <span>Фильтры</span>
          </div>
        </div>
      </div>
      <div className="filters">
        <div className="filter">
          Опэнэир<img className='filter__cross-icon' src={crossIcon} alt="cross" />
        </div>
        <div className="filter">
          11.11.2023<img className='filter__cross-icon' src={crossIcon} alt="cross" />
        </div>
        <div className="filter">
          25 руб.<img className='filter__cross-icon' src={crossIcon} alt="cross" />
        </div>
      </div>
    </article>
  )
};

export default SearchPanel;