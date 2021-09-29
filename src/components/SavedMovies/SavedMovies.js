import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  );
};

export default SavedMovies;
