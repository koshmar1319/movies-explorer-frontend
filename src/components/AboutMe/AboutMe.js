import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title title">Студент</h2>
        <div className="about-me__inner-container">
          <div className="about-me__block">
            <div className="about-me__info">
              <h3 className="about-me__name">Кирилл</h3>
              <p className="about-me__profession">Фронтенд-разработчик, {new Date().getFullYear() - 1989} года</p>
              <p className="about-me__description">
                Я родился и живу в городе Руза Московской области, закончил Московское Медицинское Училище №9. С 2013 года работал в реабилитационном центре по восстановлению инвалидов. В 2020 году решил сменить сферу деятельности. Я люблю познавать что-то новое. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал работать Фронтенд-разработчиком.
              </p>
            </div>
            <ul className="about-me__socials list">
              <li className="about-me__item">
                <a href="https://www.facebook.com/kirill.komarkov.52/" target='_blank' rel='noreferrer' className="link about-me__link">Facebook</a>
              </li>
              <li className="about-me__item">
                <a href="https://github.com/koshmar1319" target='_blank' rel='noreferrer' className="link about-me__link">Github</a>
              </li>
            </ul>
          </div>
          <img src={avatar} alt="Аватар студента" className="about-me__avatar" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
