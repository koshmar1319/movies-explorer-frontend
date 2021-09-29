import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMore from '../MoviesMore/MoviesMore';
import './Movies.css';

const Movies = () => {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
        <MoviesMore />
      </div>
    </main>
  );
};

export default Movies;
