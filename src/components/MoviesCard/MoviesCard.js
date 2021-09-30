import React from 'react';
import cardImage from '../../images/card_picture.jpg';
import './MoviesCard.css';

const MoviesCard = (props) => {
  const [toggle, setToggle] = React.useState(false);

  const toggleIt = () => {
    setToggle(!toggle);
  }

  return (
    <div className="movie-card">
      <div className="movie-card__block">
        <div className="movie-card__info">
          <h2 className="movie-card__title">33 слова о дизайне</h2>
          <p className="movie-card__duration">1ч 47м</p>
        </div>
        <button onClick={toggleIt} className={`movie-card__button ${props.saved ? 'movie-card__button_saved' : 'movie-card__button_not-saved'} ${toggle ? 'movie-card__button_active' : ''}`}>
        </button>
      </div>
      <a href="./movies" target='_blank' rel='noreferrer' className="movie-card__link">
        <img src={cardImage} alt="Изображение карточки" className="movie-card__image" />
      </a>
    </div>
  );
};

export default MoviesCard;
