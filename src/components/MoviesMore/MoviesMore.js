import React from 'react';
import './MoviesMore.css';

const MoviesMore = (props) => {
  return (
    <div className="movies__more">
      <button onClick={props.handleAddMovies} className="movies__more-button">Ещё</button>
    </div>
  );
};

export default MoviesMore;
