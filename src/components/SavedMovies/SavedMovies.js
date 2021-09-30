import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = (props) => {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList saved={true}/>
      </div>
    </main>
  );
};

export default SavedMovies;
