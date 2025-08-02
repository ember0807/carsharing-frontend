import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.title}>О нашем сервисе</h2>
      <p className={styles.description}>
        Мы предлагаем быстрый и удобный каршеринг. Наш автопарк включает современные автомобили, доступные 24/7. Забудьте о пробках и поиске парковки — просто забронируйте машину через приложение и наслаждайтесь поездкой.
      </p>
      <div className={styles.features}>
        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>24/7 Доступ</h3>
          <p className={styles.featureDescription}>Машины доступны в любое время, в любом районе города.</p>
        </div>
        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Гибкие тарифы</h3>
          <p className={styles.featureDescription}>Выбирайте тариф, который подходит именно вам — поминутный, почасовой или на целый день.</p>
        </div>
        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Современный автопарк</h3>
          <p className={styles.featureDescription}>Только новые и комфортные автомобили, прошедшие полную проверку.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;