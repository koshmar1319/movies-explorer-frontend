import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';

const Header = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const showSideBar = () => {
    setIsOpenSidebar(true);
  }

  const closeSideBar = () => {
    setIsOpenSidebar(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className="header__block header__logo-link link">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>

        <div className="header__block header__block_movies">
          <Link to='/movies' className="header__movies link">Фильмы</Link>
          <Link to='/saved-movies' className="header__saved-movies link">Сохранённые фильмы</Link>
        </div>

        <div className="header__block header__block_auth">
          <Link to='/profile' className="header__profile link">Аккаунт</Link>
          <Link to='/signup' className="header__signup link">Регистрация</Link>
          <Link to='/signin' className="header__signin link">Войти</Link>
        </div>

        {isOpenSidebar
          ?
          <MobileMenu closeSideBar={closeSideBar} isOpenSidebar={isOpenSidebar} />
          :
          <div className={`${isOpenSidebar ? 'header__burger-menu_inactive' : 'header__burger-menu'}`} onClick={showSideBar}>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
