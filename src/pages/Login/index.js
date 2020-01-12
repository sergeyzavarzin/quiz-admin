import React from 'react';
import {Button, Input} from 'antd';

import './Login.scss';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      login: null,
      password: null,
      error: false,
    };
    this.logins = ['admin'];
    this.passwords = ['admin'];
  }

  login = () => {
    const {login, password} = this.state;
    if (this.logins.includes(login) && this.passwords.includes(password)) {
      localStorage.setItem('isAuth', 'true');
      window.location.reload();
    } else {
      this.setState({error: true})
    }
  };

  render() {
    const {login, password, error} = this.state;
    return (
      <main className='login'>
        <form
          className='login-form'
          onSubmit={this.login}
        >
          <h1 className='login-form__heading'>Вход</h1>
          <label className='login-form__label'>
            <Input
              placeholder='Логин'
              value={login}
              onChange={({currentTarget: {value}}) => this.setState({login: value})}
            />
          </label>
          <label className='login-form__label'>
            <Input
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={({currentTarget: {value}}) => this.setState({password: value})}
            />
          </label>
          <Button
            type='primary'
            onClick={this.login}
          >
            Войти
          </Button>
          {
            error && <div className='login-form__error'>
              Неверный логин или пароль.
            </div>
          }
        </form>
      </main>
    )
  }
}

export default Login;
