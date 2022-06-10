import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

const Register = (props) => {
  const { values, errors, isValid, handleChange } = props.useFormAndValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister(values);
  }

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to='/'>
          <img src={logo} alt="Логотип" className="auth__logo" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label htmlFor="input-name" className="auth__label">
            <p className="auth__text">Имя</p>
            <input
              type="text"
              className={`auth__input ${errors.name ? 'auth__input_error' : ''}`}
              id="input-name"
              placeholder="Введите имя"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
              required />
            {
              errors.name
                ? <span className="auth__error">{errors.name}</span>
                : ''
            }
          </label>
          <label htmlFor="input-email" className="auth__label">
            <p className="auth__text">E-mail</p>
            <input
              type="email"
              className={`auth__input ${errors.email ? 'auth__input_error' : ''}`}
              id="input-email"
              placeholder="Введите email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required />
            {
              errors.email
                ? <span className="auth__error">{errors.email}</span>
                : ''
            }
          </label>
          <label htmlFor="input-password" className="auth__label">
            <p className="auth__text">Пароль</p>
            <input
              type="password"
              className={`auth__input ${errors.password ? 'auth__input_error' : ''}`}
              id="input-password"
              placeholder="Введите пароль"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              required />
            {
              errors.password
                ? <span className="auth__error">{errors.password}</span>
                : ''
            }
          </label>

          <div className="auth__low-block auth__low-block_register">
            {props.errorText
              ? <span className="auth__low-block_span">{props.errorText}</span>
              : ''
            }
            <button
              className="auth__low-block_button"
              type="submit"
              onClick={handleSubmit}
              disabled={!isValid || props.state.disableInputs}
            >Зарегистрироваться</button>
            <p className="auth__low-block_text">
              Уже зарегистрированы? <Link className="auth__low-block_link" to="/signin">Войти</Link>
            </p>
          </div>
        </form>

      </div>
    </main>
  );
};

export default Register;
