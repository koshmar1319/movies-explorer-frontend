import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <ul className="list nav-tab__list">
        <li className={'nav-tab__item'}>
          <a href={'#about-project'} className={'link nav-tab__link'}>О проекте</a>
        </li>
        <li className={'nav-tab__item'}>
          <a href={'#technologies'} className={'link nav-tab__link'}>Технологии</a>
        </li>
        <li className={'nav-tab__item'}>
          <a href={'#about-me'} className={'link nav-tab__link'}>Студент</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
