import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

const Register = () => {
  return (
    <main className="auth">
      <div className="auth__container">
        <Link to='/'>
          <img src={logo} alt="Логотип" className="auth__logo" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="auth__form">
          <label htmlFor="input-name" className="auth__label">
            <p className="auth__text">Имя</p>
            <input type="text" className="auth__input" id="input-name" placeholder="Введите имя" required />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>
          <label htmlFor="input-email" className="auth__label">
            <p className="auth__text">E-mail</p>
            <input type="email" className="auth__input" id="input-email" placeholder="Введите email" required />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>
          <label htmlFor="input-password" className="auth__label">
            <p className="auth__text">Пароль</p>
            <input type="password" className="auth__input" id="input-password" placeholder="Введите пароль" required />
            <span className="auth__error">Что-то пошло не так...</span>
          </label>

          <div className="auth__low-block auth__low-block_register">
            <button className="auth__low-block_button">Зарегистрироваться</button>
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
