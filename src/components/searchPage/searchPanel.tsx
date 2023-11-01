import React from 'react';
import filterIcon from './assets/svg/mi_filter.svg';
import searchIcon from './assets/svg/octicon_search-16.svg';
import './assets/css/searchPanel.css';

interface searchPanelProps {
  searchValue : string,
  setSearchValue : Function,
  openWindow : Function,
  category : Array<string>,
  date : undefined | string,
}

const SearchPanel = ({searchValue, setSearchValue, openWindow, category, date} : searchPanelProps) => {
  const categoryFilters = category.map((category) => 
  <div className="filter">
    {category}
  </div>
  );

  return (
    <article className='search-panel'>
      <div className='search__wrapper'>
        <div className='search'>
          <img className='search__icon' src={searchIcon} alt="search-icon"/>
          <input className='search__input' type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
        <div className='search__filters'>
          <div className='filter__button' onClick={() => openWindow(true)}>
            <img className='filter-icon' src={filterIcon} alt='filter-icon'/>
            <span>Фильтры</span>
          </div>
        </div>
      </div>
      <div className="filters">
        {categoryFilters}
          {date ? <div className="filter">{date}</div> : null}
      </div>
    </article>
  )
};

export default SearchPanel;