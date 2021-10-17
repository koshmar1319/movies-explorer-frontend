import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = (props) => {
  const [moviesArray, setMoviesArray] = React.useState([]);

  React.useEffect(() => {
    if (!props.state.movieSavedSearchSubmitClick) {
      return setMoviesArray(props.state.savedMovieList);
    } else {
      if (props.state.filteredSavedMovieList.length !== 0 && props.state.savedMovieSearch.length !== '') {
        return setMoviesArray(props.state.filteredSavedMovieList);
      } else {
        return setMoviesArray([]);
      }
    }
  }, [props.state.movieSavedSearchSubmitClick, props.state.filteredSavedMovieList, props.state.savedMovieList, props.state.savedMovieSearch.length]);

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          state={props.state}
          setState={props.setState}
          saved={true}
        />
        {props.isLoading
          ? <Preloader />
          : (
            moviesArray.length > 0
              ? <MoviesCardList
                moviesArray={moviesArray}
                state={props.state}
                setState={props.setState}
                saved={true}
                handleDeleteSavedMovie={props.handleDeleteSavedMovie}
              />
              : <p className="movies__not-found">Ничего не найдено</p>
          )
        }
      </div>
    </main>
  );
};

export default SavedMovies;
