import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Card from '../components/Card/Card.jsx';
import styles from './AuthPages.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ name: 'Пользователь', email });
      navigate('/profile');
    } else {
      alert('Пожалуйста, введите email и пароль.');
    }
  };

  return (
    <div className={styles.container}>
      <Card>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Вход</h2>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;