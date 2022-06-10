import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

const Profile = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues } = props.useFormAndValidation({});

  React.useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleEditProfile(values);
  }

  return (
    <main className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form">
          <label htmlFor="profile-name" className="profile__label">
            <p className="profile__text">Имя</p>
            <input
              type="text"
              className="profile__input"
              id="profile-name"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              disabled={props.state.disableInputs}
              minLength={2}
              maxLength={30}
              required />
          </label>
          <div className="profile__devider"></div>
          <label htmlFor="profile-email" className="profile__label">
            <p className="profile__text">E-mail</p>
            <input
              type="email"
              className="profile__input"
              id="profile-email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              disabled={props.state.disableInputs}
              required />
          </label>
        </form>
        <div className="profile__low-block">
          {
            errors.name || errors.email || props.errorText
              ? <span className="profile__error">{errors.name || errors.email || props.errorText}</span>
              : ''
          }
          {
            props.successText
              ? <span className="profile__sucess">Данные сохранены</span>
              : ''
          }
          <button
            className="profile__button profile__button_edit"
            type="submit"
            onClick={handleSubmit}
            disabled={!isValid || props.state.disableInputs}
          >Редактировать</button>
          <button
            className="profile__button profile__button_out"
            type="button"
            onClick={props.handleLogout}
          >Выйти из аккаунта</button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
