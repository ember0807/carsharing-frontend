import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';
import { useAuth } from './context/AuthContext.jsx'; // ИСПРАВЛЕНО
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { currentUser } = useAuth(); // ИСПОЛЬЗУЕМ ХУК useAuth

  return (
    <div className={`App ${theme}`} data-theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route 
            path="/profile" 
            element={currentUser ? <ProfilePage /> : <Navigate to="/login" />} 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;