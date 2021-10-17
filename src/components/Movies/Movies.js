import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMore from '../MoviesMore/MoviesMore';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = (props) => {
  const [moviesArray, setMoviesArray] = React.useState([]);

  React.useEffect(() => {
    if (!props.state.movieSearchSubmitClick) {
      if (localStorage.filteredMoviesList) {
        return setMoviesArray(JSON.parse(localStorage.filteredMoviesList));
      } else {
        return setMoviesArray(props.state.movieList);
      }
    } else {
      if (props.state.filteredMoviesList.length !== 0 && props.state.movieSearch.length !== '') {
        return setMoviesArray(props.state.filteredMoviesList)
      } else {
        return setMoviesArray([])
      }
    }
  }, [props.state.movieSearchSubmitClick, props.state.filteredMoviesList, props.state.movieList, props.state.movieSearch.length]);

  const handleAddMovies = () => props.setState({
    ...props.state,
    numberMovies: props.state.numberMovies + props.state.addNumberMovies
  });

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          state={props.state}
          setState={props.setState}
        />
        {props.isLoading
          ? <Preloader />
          : (
            <>
              {
                moviesArray.length > 0
                  ? <MoviesCardList
                    moviesArray={moviesArray}
                    state={props.state}
                    setState={props.setState}
                    handleSaveMovie={props.handleSaveMovie}
                    handleDeleteSavedMovie={props.handleDeleteSavedMovie}
                  />
                  : <p className="movies__not-found">Ничего не найдено</p>
              }
              {
                moviesArray.length <= props.state.numberMovies
                  ? ''
                  : <MoviesMore handleAddMovies={handleAddMovies} />
              }
            </>
          )
        }
      </div>
    </main>
  );
};

export default Movies;
