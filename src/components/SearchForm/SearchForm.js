import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [stateCheckBox, setStateCheckBox] = React.useState(false);

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU.toLowerCase().includes(movieSearch.toLowerCase());
    return filtered;
  }

  const filterMoviesArray = (movieList, searchValue) => {
    if (stateCheckBox) {
      const shortMovie = movieList.filter((movie) => movie.duration <= 40 && handleFilter(movie, searchValue));
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => handleFilter(movie, searchValue));
      return filteredMovies;
    }
  }

  const handleChange = (e) => {
    if (props.saved) {
      props.setState({ ...props.state, savedMovieSearch: e.target.value });
    } else {
      props.setState({ ...props.state, movieSearch: e.target.value });
    }
  }

  const handleChangeCheckBox = () => setStateCheckBox(!stateCheckBox);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.saved) {
      props.setState({ ...props.state, savedMovieSearch: e.target.value });
      const filteredSavedMoviesArray = filterMoviesArray(props.state.savedMovieList, props.state.savedMovieSearch);
      props.setState({
        ...props.state,
        filteredSavedMovieList: filteredSavedMoviesArray,
        movieSavedSearchSubmitClick: true,
      });
      localStorage.setItem('filteredSavedMovieList', JSON.stringify(filteredSavedMoviesArray));
    } else {
      props.setState({ ...props.state, movieSearch: e.target.value });
      const filteredMoviesArray = filterMoviesArray(props.state.movieList, props.state.movieSearch);
      props.setState({
        ...props.state,
        filteredMoviesList: filteredMoviesArray,
        movieSearchSubmitClick: true,
      });
      localStorage.setItem('filteredMoviesList', JSON.stringify(filteredMoviesArray));
    }
  }

  return (
    <form className="search">
      <div className="search__container">
        <div className="search__block_film">
          <label htmlFor="search-line" className="search__label">
            <input
              type="text"
              id="search-line"
              name="search"
              className="search__input"
              placeholder="Фильм"
              value={props.saved ? props.state.savedMovieSearch : props.state.movieSearch}
              onChange={handleChange}
              required />
          </label>
          <button onClick={handleSubmit} className="search__button"></button>
        </div>
        <div className="search__block_short-film">
          <label className="switch__label" htmlFor="switch">
            <input
              type="checkbox"
              name="checkbox"
              id="switch"
              className="switch__input"
              checked={stateCheckBox}
            />
            <span onClick={handleChangeCheckBox} className="switch__span_slider switch__span_round"></span>
          </label>
          <p className="switch__text">Короткометражки</p>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
