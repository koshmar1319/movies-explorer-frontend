import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search">
      <div className="search__container">
        <div className="search__block_film">
          <label htmlFor="search" className="search__label">
            <input type="text" id="search" className="search__input" placeholder="Фильм" required />
          </label>
          <button className="search__button"></button>
        </div>
        <div className="search__block_short-film">
          <label className="switch__label">
            <input type="checkbox" className="switch__input" />
            <span className="switch__span_slider switch__span_round"></span>
          </label>
          <p className="switch__text">Короткометражки</p>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
