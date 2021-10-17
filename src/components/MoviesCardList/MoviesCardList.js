import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = (props) => {
  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {
          props.moviesArray.slice(0, props.state.numberMovies)
            .map((item) =>
              <MoviesCard
                item={item}
                state={props.state}
                saved={props.saved}
                handleSaveMovie={props.handleSaveMovie}
                handleDeleteSavedMovie={props.handleDeleteSavedMovie}
                key={item._id || item.id}
              />)
        }
      </div>
    </section>
  );
};

export default MoviesCardList;
