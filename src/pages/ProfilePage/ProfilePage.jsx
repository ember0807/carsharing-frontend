import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import { useAuth } from '../../context/AuthContext.jsx'; // ИСПРАВЛЕНО

const ProfilePage = () => {
  const { currentUser, logout } = useAuth(); // ИСПОЛЬЗУЕМ ХУК useAuth
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h2 className={styles.title}>Профиль</h2>
          <p>Вы не авторизованы. <a href="/login" className={styles.link}>Войти</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2 className={styles.title}>Профиль пользователя</h2>
        <div className={styles.userInfo}>
          <p>Имя: <span>{currentUser.name}</span></p>
          <p>Email: <span>{currentUser.email}</span></p>
        </div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;