import React, { useState } from 'react';
import AboutUs from '../components/AboutUs/AboutUs.jsx';
import Map from '../components/Map/Map.jsx';
import BookingForm from '../components/BookingForm/BookingForm.jsx';
import styles from './HomePage.module.css';

// Данные об автомобилях комфорт-класса
const comfortCars = [
  { id: 1, name: 'Kia Rio X-Line', class: 'Комфорт', coords: [47.2357, 39.7015], status: 'Доступен', price: { minute: 8, hour: 400 } },
  { id: 2, name: 'Hyundai Solaris', class: 'Комфорт', coords: [47.2450, 39.7120], status: 'Доступен', price: { minute: 9, hour: 450 } },
  { id: 3, name: 'Skoda Rapid', class: 'Комфорт', coords: [47.2280, 39.7300], status: 'Доступен', price: { minute: 8, hour: 400 } },
  { id: 4, name: 'Lada Vesta', class: 'Комфорт', coords: [47.2150, 39.6950], status: 'Занят', price: { minute: 7, hour: 350 } },
  { id: 5, name: 'Volkswagen Polo', class: 'Комфорт', coords: [47.2500, 39.7000], status: 'Доступен', price: { minute: 10, hour: 500 } },
  { id: 6, name: 'Nissan Almera', class: 'Комфорт', coords: [47.2200, 39.7250], status: 'Доступен', price: { minute: 8, hour: 400 } },
  { id: 7, name: 'Renault Logan', class: 'Комфорт', coords: [47.2400, 39.7150], status: 'Доступен', price: { minute: 7, hour: 350 } },
  { id: 8, name: 'Kia Ceed', class: 'Комфорт', coords: [47.2300, 39.6800], status: 'Доступен', price: { minute: 11, hour: 550 } },
  { id: 9, name: 'Toyota Corolla', class: 'Комфорт', coords: [47.2480, 39.7200], status: 'Доступен', price: { minute: 12, hour: 600 } },
  { id: 10, name: 'Ford Focus', class: 'Комфорт', coords: [47.2250, 39.7050], status: 'Занят', price: { minute: 10, hour: 500 } },
];

// Данные об автомобилях премиум-сегмента
const premiumCars = [
  { id: 11, name: 'BMW 5 Series', class: 'Премиум', coords: [47.2380, 39.6900], status: 'Доступен', price: { minute: 25, hour: 1500 } },
  { id: 12, name: 'Mercedes-Benz E-Class', class: 'Премиум', coords: [47.2300, 39.7100], status: 'Доступен', price: { minute: 30, hour: 1800 } },
  { id: 13, name: 'Audi A6', class: 'Премиум', coords: [47.2100, 39.7200], status: 'Занят', price: { minute: 28, hour: 1700 } },
  { id: 14, name: 'Genesis G80', class: 'Премиум', coords: [47.2550, 39.6850], status: 'Доступен', price: { minute: 22, hour: 1300 } },
  { id: 15, name: 'Volvo S90', class: 'Премиум', coords: [47.2420, 39.7350], status: 'Доступен', price: { minute: 24, hour: 1400 } },
];

const allCars = [...comfortCars, ...premiumCars];

const HomePage = () => {
  const [selectedCarId, setSelectedCarId] = useState('');

  const handleCarSelect = (carId) => {
    setSelectedCarId(carId.toString());
  };

  return (
    <div className={styles.homeContainer}>
      <section className={styles.bookingSection}>
        <div className={styles.bookingCard}>
          <BookingForm 
            cars={allCars.filter(car => car.status === 'Доступен')} 
            selectedCarId={selectedCarId}
            onCarSelect={handleCarSelect}
          />
        </div>
        <div className={styles.mapCard}>
          <Map 
            cars={allCars} 
            onCarSelect={handleCarSelect}
          />
        </div>
      </section>
      
      <section className={styles.aboutUsSection}>
        <AboutUs />
      </section>
    </div>
  );
};

export default HomePage;