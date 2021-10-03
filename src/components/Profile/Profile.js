import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <main className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Кирилл!</h2>
        <form className="profile__form">
          <label htmlFor="profile-name" className="profile__label">
            <p className="profile__text">Имя</p>
            <input type="text" className="profile__input" id="profile-name" value="Кирилл" required />
          </label>
          <div className="profile__devider"></div>
          <label htmlFor="profile-email" className="profile__label">
            <p className="profile__text">E-mail</p>
            <input type="email" className="profile__input" id="profile-email" value="pochta@yandex.ru" required />
          </label>
        </form>
        <div className="profile__low-block">
          <button className="profile__button profile__button_edit">Редактировать</button>
          <button className="profile__button profile__button_out">Выйти из аккаунта</button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
