import React, { Component, createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({ 
  user: null, 
  token: '',
  login: () => {},
  logout: () => {}
});

const serverUrl = 'http://localhost:3001';

class AuthProvider extends Component {
  login = () => {
    axios.get(serverUrl + '/auth/login').then(response => this.setState({ token: response.data.token }));
  }
  
  logout = () => {
    this.setState({ token: '' })
  }

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: '',
      login: this.login,
      logout: this.logout,
    }
    this.login = this.login.bind(this);
  }

  render() {
    const { children } = this.props;
    return <AuthContext.Provider value={this.state}>
      { children }  
    </AuthContext.Provider>
  }
}
export const AuthConsumer = AuthContext.Consumer;
export default AuthProvider;