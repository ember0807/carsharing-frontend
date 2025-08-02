import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const value = {
    isLoggedIn,
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};