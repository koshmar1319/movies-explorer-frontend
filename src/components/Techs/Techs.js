import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className="technologies" id="technologies">
      <div className="technologies__container">
        <h2 className="technologies__title title">Технологии</h2>
        <div className="technologies__block">
          <h3 className="technologies__subtitle">7 технологий</h3>
          <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="technologies__list list">
            <li className="technologies__item">HTML</li>
            <li className="technologies__item">CSS</li>
            <li className="technologies__item">JS</li>
            <li className="technologies__item">React</li>
            <li className="technologies__item">Git</li>
            <li className="technologies__item">Express.js</li>
            <li className="technologies__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
