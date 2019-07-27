import axios from 'axios';
import React, { Component } from 'react';
import swal from 'sweetalert';
import { getRole, setToken } from '../Auth/index';
import { Button, TextField } from '@material-ui/core';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });
      if (response.status === 200) {
        await setToken(response.data);
        const role = getRole();
        if (role === 'student') {
          return this.props.history.replace('/play');
        }
        if (role === 'mentor') {
          return this.props.history.replace('/results');
        }
        if (role === 'leadmentor') {
          return this.props.history.replace('/createquiz');
        }
        return;
      } else {
        throw new Error('no token');
      }
    } catch (err) {
      if (err.response) {
        return swal('Cancelled', err.response.data.msg, 'error');
      }
      return swal(
        'Cancelled',
        'Somethings went wrong, please try again later.',
        'error'
      );
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login-container">
        <form onSubmit={this.handleLogin} className="Login">
        <h4 className="member">Member Login</h4>
          <div className="input">
            <input
              type="text"
              name="email"
              value={email}
              className="User-pass"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              onChange={this.onChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              className="User-pass"
              placeholder="Password"
            />
          </div>
          <div className="">
            <button type="submit" className="login-btn btn btn-success ml-1">
              Login
            </button>
          </div>
        </form>
      </div>
      
    );
  }
}

export default Login;
