import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const { toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          CarSharing
        </Link>
        
        <button className={styles.burgerButton} onClick={handleMobileMenuToggle}>
          <div className={`${styles.burgerIcon} ${isMobileMenuOpen ? styles.burgerIconOpen : ''}`} />
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Главная</NavLink></li>
            <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/tariffs" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Тарифы</NavLink></li>
            <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/conditions" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Условия</NavLink></li>
            <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/reviews" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Отзывы</NavLink></li>
            <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/contacts" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Контакты</NavLink></li>
            {isLoggedIn ? (
              <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/profile" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>{currentUser.name}</NavLink></li>
            ) : (
              <>
                <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/login" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Войти</NavLink></li>
                <li className={styles.navItem}><NavLink onClick={handleLinkClick} to="/register" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Регистрация</NavLink></li>
              </>
            )}
          </ul>
        </nav>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {/* Иконки для переключения темы */}
          <span className={styles.themeIcon}>🌙</span>
        </button>
      </div>
    </header>
  );
};

export default Header;