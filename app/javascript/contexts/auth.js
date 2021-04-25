import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AUTHENTICATE_URL = "http://localhost:3000/api/v1/authenticate"

const AuthProvider = ({ children }) => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return userToken?.auth_token
  };

  const saveToken = userToken => { console.log(userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.auth_token);
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  const [token, setToken] = useState(getToken());

  const login = async (email, password)  => {
    const res = await fetch(AUTHENTICATE_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password})
    });

    if (res.ok)
      saveToken(await res.json()); 

    return res.ok;
  }

  const logout = async () => {
    clearToken();
    // TODO: might want to make logout request
  }

  return (
    <AuthContext.Provider
        value={{
          login: login,
          token: token,
          logout: logout
        }}
      >
        {children}
      </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext }
