import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__block">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__socials list">
            <li className="footer__item">
              <a href="https://praktikum.yandex.ru" target='_blank' rel='noreferrer' className="footer__link link">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/koshmar1319" target='_blank' rel='noreferrer' className="footer__link link">Github</a>
            </li>
            <li className="footer__item">
              <a href="https://www.facebook.com/kirill.komarkov.52/" target='_blank' rel='noreferrer' className="footer__link link">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
