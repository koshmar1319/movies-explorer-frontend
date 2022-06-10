import React from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink
                exact to="/"
                className="link sidebar__link"
                activeClassName={`${props.isOpenSidebar ? 'sidebar__link_active' : ''}`}
              >Главная</NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink
                to="/movies"
                className="link sidebar__link"
                activeClassName={`${props.isOpenSidebar ? 'sidebar__link_active' : ''}`}
              >Фильмы</NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink
                to="/saved-movies"
                className="link sidebar__link"
                activeClassName={`${props.isOpenSidebar ? 'sidebar__link_active' : ''}`}
              >Сохранённые фильмы</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/profile" className="sidebar__account">
          <p className="sidebar__account_text">Аккаунт</p>
          <img src={accountIcon} alt="Иконка аккаунта" className="sidebar__account_icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default MobileMenu;
