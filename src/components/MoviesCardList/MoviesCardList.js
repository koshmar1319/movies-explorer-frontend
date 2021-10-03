import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = (props) => {
  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
      </div>
    </section>
  );
};

export default MoviesCardList;
