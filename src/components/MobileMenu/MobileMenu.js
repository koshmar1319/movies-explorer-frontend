import React from 'react';
import { Link } from 'react-router-dom';
import accountIcon from '../../images/account_icon.svg';
import './MobileMenu.css';

const MobileMenu = (props) => {
  return (
    <div className={`sidebar ${props.isOpenSidebar ? 'sidebar_opened' : ''}`}>
      <div className="sidebar__container">
        <button className="sidebar__close" onClick={props.closeSideBar}>&times;</button>
        <nav className="sidebar__navigation">
          <ul className="list sidebar__list">
            <li className="sidebar__item">
              <Link className="link sidebar__link" to="/">Главная</Link>
            </li>
            <li className="sidebar__item">
              <Link className="link sidebar__link" to="/movies">Фильмы</Link>
            </li>
            <li className="sidebar__item">
              <Link className="link sidebar__link" to="/saved-movies">Сохранённые фильмы</Link>
            </li>
          </ul>
        </nav>
        <Link to="/profile" className="sidebar__account">
          <p className="sidebar__account_text">Аккаунт</p>
          <img src={accountIcon} alt="Иконка аккаунта" className="sidebar__account_icon" />
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
