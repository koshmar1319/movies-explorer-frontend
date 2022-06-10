import React from 'react';
import './MoviesCard.css';

const MoviesCard = (props) => {
  const isMovieSaved = props.state.savedMovieList.some((movieData) => movieData.nameRU === props.item.nameRU);
  const handleClickDelete = () => props.handleDeleteSavedMovie(props.item);

  const handleClickSave = () => {
    if (isMovieSaved) {
      const movieIdForDelete = props.state.savedMovieList.find((movieData) =>
        (movieData.nameRU === props.item.nameRU) ? movieData : '');
      props.handleDeleteSavedMovie(movieIdForDelete);
    } else {
      const API_MOVIES_BASE_URL = 'https://api.nomoreparties.co';
      const movieData = {
        country: props.item.country || 'Not Found',
        director: props.item.director || 'Not Found',
        duration: props.item.duration || 'Not Found',
        year: props.item.year || 'Not Found',
        description: props.item.description || 'Not Found',
        image: `${API_MOVIES_BASE_URL}${props.item.image.url}` || 'Not Found',
        trailer: props.item.trailerLink || 'Not Found',
        thumbnail: `${API_MOVIES_BASE_URL}${props.item.image.formats.thumbnail.url}` || 'Not Found',
        movieId: props.item.id || 'Not Found',
        nameRU: props.item.nameRU || 'Not Found',
        nameEN: props.item.nameEN || 'Not Found',
      };
      props.handleSaveMovie(movieData);
    }
  }

  const handleChangeTime = (time) => (time < 60) ? `${time} м` : `${Math.floor(time / 60)} ч ${time % 60} м`;

  return (
    <div className="movie-card">
      <div className="movie-card__block">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{props.item.nameRU}</h2>
          <p className="movie-card__duration">{handleChangeTime(props.item.duration)}</p>
        </div>

        {props.saved
          ? (<button onClick={handleClickDelete} className={`movie-card__button movie-card__button_saved`}></button>)
          : isMovieSaved
            ? (<button onClick={handleClickSave} className={`movie-card__button movie-card__button_active`}></button>)
            : (<button onClick={handleClickSave} className={`movie-card__button movie-card__button_not-saved`}></button>)
        }

      </div>
      <a href={props.item.trailerLink} target='_blank' rel='noreferrer' className="movie-card__link">
        <img src={props.item.image.url ? `https://api.nomoreparties.co${props.item.image.url}` : props.item.image} alt={props.item.nameRU} className="movie-card__image" />
      </a>
    </div>
  );
};

export default MoviesCard;
