import { Switch, Route, useRouteMatch, Redirect } from 'react-router';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      {
        useRouteMatch(['/signin', '/signup', '/not-found']) ? '' : <Header />
      }
      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route exact path='/movies'>
          <Movies />
        </Route>

        <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route >
          <Redirect from='*' to='/not-found' />
          <NotFound />
        </Route>

      </Switch>

      {
        useRouteMatch(['/signin', '/signup', '/profile', '/not-found']) ? '' : <Footer />
      }

    </div>
  );
}

export default App;
