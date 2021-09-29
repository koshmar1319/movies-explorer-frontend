import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="title about-project__title">О проекте</h2>
        <div className="about-project__block">
          <div className="about-project__item">
            <h3 className="about-project__item_title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__item_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__item">
            <h3 className="about-project__item_title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__item_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__progress">
          <div className="about-project__progress-backend"></div>
          <div className="about-project__progress-frontend"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
