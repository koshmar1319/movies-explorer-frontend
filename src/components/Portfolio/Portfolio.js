import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list list">
          <li className="portfolio__item">
            <a href="https://github.com/koshmar1319/how-to-learn" target='_blank' rel='noreferrer' className="portfolio__link link">Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/koshmar1319/russian-travel" target='_blank' rel='noreferrer' className="portfolio__link link">Адаптивный сайт</a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/koshmar1319/react-mesto-api-full" target='_blank' rel='noreferrer' className="portfolio__link link">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
