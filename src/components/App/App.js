import React from 'react';
import { Switch, Route, useRouteMatch, useHistory, Redirect } from 'react-router';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { useFormAndValidation } from '../../utils/useFormAndValidation';
import './App.css';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(localStorage.jwt));
  const [successText, setSuccessText] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorText, setErrorText] = React.useState('');
  const [state, setState] = React.useState({
    movieList: [],
    savedMovieList: [],
    movieSearch: '',
    movieSearchSubmitClick: false,
    savedMovieSearch: '',
    movieSavedSearchSubmitClick: false,
    filteredMoviesList: [],
    filteredSavedMovieList: [],
    numberMovies: 12,
    addNumberMovies: 3,
    disableInputs: false,
  });

  React.useEffect(() => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem('jwt');
      setIsLoading(true);
      Promise.all([
        MainApi.checkToken(jwt),
        MoviesApi.getMovies(),
        MainApi.getSavedMovies(jwt),
      ])
        .then(([
          userData,
          movieList,
          savedMovieList,
        ]) => {
          setCurrentUser(userData);
          setState({
            ...state,
            movieList,
            savedMovieList: savedMovieList.filter(movie => movie.owner === userData._id)
          });
        })
        .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`))
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  const handleCheckToken = (token) => {
    return MainApi.checkToken(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsLoggedIn(true);
          history.push('/movies');
        } else {
          Promise.reject();
        }
      })
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  }

  const handleTextError = (message) => {
    setErrorText(message);
    setTimeout(() => setErrorText(''), 5000);
  }

  const handleEditProfile = (data) => {
    const token = localStorage.getItem('jwt');
    const { name, email } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.updateUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res);
        setSuccessText(true);
        setTimeout(() => setSuccessText(false), 5000);
      })
      .catch((err) => {
        if (err && err === 'Ошибка 409') {
          handleTextError('Пользователь с такимим данными уже существует');
        } else if (err && err === 'Ошибка 400') {
          handleTextError('Проверьте корректность введенных данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  }

  const handleLogin = (data) => {
    const { email, password } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        handleCheckToken(data.token);
      })
      .catch((err) => {
        if (err && err === 'Ошибка 401') {
          handleTextError('Неверный логин или пароль');
        } else if (err && err === 'Ошибка 400') {
          handleTextError('Проверьте корректность введенных данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  }

  const handleSaveMovie = (movie) => {
    const token = localStorage.getItem('jwt');
    return MainApi.saveMovie(movie, token)
      .then((savedMovie) => {
        setState({
          ...state,
          savedMovieList: [...state.savedMovieList, savedMovie],
        })
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  }

  const handleDeleteSavedMovie = (movieId) => {
    const token = localStorage.getItem('jwt');
    return MainApi.deleteMovie(movieId, token)
      .then((deletedMovie) => {
        const updateMovieList = state.savedMovieList.filter((i) => i._id !== deletedMovie.movie._id)
        setState({ ...state, savedMovieList: updateMovieList, filteredSavedMovieList: updateMovieList });
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  }

  const handleRegister = (data) => {
    const { name, email, password } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.register(name, email, password)
      .then(() => {
        return handleLogin({ email, password });
      })
      .catch((err) => {
        if (err && err === 'Ошибка 409') {
          handleTextError('Такой пользователь уже существует');
        } else if (err && err === 'Ошибка 400') {
          handleTextError('Проверьте корректность введенных данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser(null);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {
        useRouteMatch(['/signin', '/signup', '/404']) ? '' : <Header isLoggedIn={isLoggedIn} />
      }
      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/signup'>
          <Register
            state={state}
            handleRegister={handleRegister}
            useFormAndValidation={useFormAndValidation}
            errorText={errorText}
          />
        </Route>

        <Route path='/signin'>
          <Login
            state={state}
            handleLogin={handleLogin}
            useFormAndValidation={useFormAndValidation}
            errorText={errorText}
          />
        </Route>

        <ProtectedRoute
          exact path='/movies'
          component={Movies}
          isLoggedIn={isLoggedIn}
          state={state}
          setState={setState}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          handleSaveMovie={handleSaveMovie}
          handleDeleteSavedMovie={handleDeleteSavedMovie}
        />

        <ProtectedRoute
          exact path='/saved-movies'
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
          state={state}
          setState={setState}
          handleDeleteSavedMovie={handleDeleteSavedMovie}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />

        <ProtectedRoute
          exact path='/profile'
          component={Profile}
          isLoggedIn={isLoggedIn}
          state={state}
          handleEditProfile={handleEditProfile}
          handleLogout={handleLogout}
          useFormAndValidation={useFormAndValidation}
          successText={successText}
        />

        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />

      </Switch>
      {
        useRouteMatch(['/signin', '/signup', '/profile', '/404']) ? '' : <Footer />
      }
    </CurrentUserContext.Provider>
  );
}

export default App;
