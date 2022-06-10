import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import accountIcon from '../../images/account_icon.svg';
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
        <Link to='/' className={`header__block header__logo-link link`}>
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>

        {props.isLoggedIn
          ? (
            <>
              <div className={`header__block header__block_movies`}>
                <Link to='/movies' className={`header__movies link`}>Фильмы</Link>
                <Link to='/saved-movies' className={`header__saved-movies link`}>Сохранённые фильмы</Link>
              </div>
              <div className="header__block header__block_auth">
                <Link to='/profile' className="header__profile link">
                  <p className="header__profile_text">Аккаунт</p>
                  <img src={accountIcon} alt="Иконка аккаунта" className="header__profile_icon" />
                </Link>
              </div>
              <MobileMenu closeSideBar={closeSideBar} isOpenSidebar={isOpenSidebar} />
              <div className={`${isOpenSidebar ? 'header__burger-menu_inactive' : 'header__burger-menu'}`} onClick={showSideBar}>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
              </div>
            </>
          )
          : <div className="header__block header__block_no-auth">
            <Link to='/signup' className="header__signup link">Регистрация</Link>
            <Link to='/signin' className="header__signin">Войти</Link>
          </div>
        }

      </div>
    </header>
  );
};

export default Header;
