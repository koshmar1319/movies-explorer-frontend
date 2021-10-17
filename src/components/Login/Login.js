import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

const Login = (props) => {
  const { values, errors, isValid, handleChange } = props.useFormAndValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(values);
  }

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to='/'>
          <img src={logo} alt="Логотип" className="auth__logo" />
        </Link>
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth__form">
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
              disabled={props.state.disableInputs}
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
              disabled={props.state.disableInputs}
              required />
            {
              errors.password
                ? <span className="auth__error">{errors.password}</span>
                : ''
            }
          </label>

          {props.errorText
            ? <span className="auth__low-block_span">{props.errorText}</span>
            : ''
          }

          <div className="auth__low-block auth__low-block_login">
            {props.errorText
              ? <span className="auth__low-block_span">{props.errorText}</span>
              : ''
            }
            <button
              className="auth__low-block_button"
              type="submit"
              onClick={handleSubmit}
              disabled={!isValid || props.state.disableInputs}
            >Войти</button>
            <p className="auth__low-block_text">
              Ещё не зарегистрированы? <Link className="auth__low-block_link" to="/signup">Регистрация</Link>
            </p>
          </div>
        </form>

      </div>
    </main>
  );
};

export default Login;
