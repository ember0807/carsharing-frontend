import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Card from '../components/Card/Card.jsx';
import styles from './AuthPages.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      login({ name, email });
      navigate('/profile');
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <div className={styles.container}>
      <Card>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Регистрация</h2>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>
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
            Зарегистрироваться
          </button>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;