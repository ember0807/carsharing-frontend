import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';

const BookingForm = ({ cars, selectedCarId, onCarSelect }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTariff, setSelectedTariff] = useState('minute');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // При изменении selectedCarId, обновляем выбор в форме
    if (selectedCarId) {
      onCarSelect(selectedCarId);
    }
  }, [selectedCarId, onCarSelect]);

  useEffect(() => {
    // Пересчитываем стоимость, когда меняются параметры бронирования
    if (selectedCarId && startDate && endDate) {
      const selectedCar = cars.find(car => car.id.toString() === selectedCarId);
      const durationInMinutes = (endDate - startDate) / (1000 * 60);

      let calculatedCost;
      if (selectedTariff === 'minute') {
        calculatedCost = durationInMinutes * selectedCar.price.minute;
      } else { // 'hour'
        const durationInHours = durationInMinutes / 60;
        calculatedCost = durationInHours * selectedCar.price.hour;
      }

      setTotalCost(calculatedCost);
    } else {
      setTotalCost(0);
    }
  }, [selectedCarId, startDate, endDate, selectedTariff, cars]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCarId && startDate && endDate) {
      const selectedCar = cars.find(car => car.id.toString() === selectedCarId);
      alert(`Автомобиль ${selectedCar.name} забронирован. Общая стоимость: ${totalCost.toFixed(2)} ₽`);
    } else {
      alert('Пожалуйста, выберите автомобиль, даты и тариф для бронирования.');
    }
  };

  const selectedCar = cars.find(car => car.id.toString() === selectedCarId);

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Забронировать автомобиль</h2>
      <div className={styles.formGroup}>
        <label className={styles.label}>Выберите автомобиль:</label>
        <select
          value={selectedCarId}
          onChange={(e) => onCarSelect(e.target.value)}
          className={styles.selectInput}
        >
          <option value="">-- Выберите авто --</option>
          {cars.map(car => (
            <option key={car.id} value={car.id}>{car.name} ({car.class})</option>
          ))}
        </select>
      </div>

      {selectedCar && (
        <div className={styles.formGroup}>
          <label className={styles.label}>Выберите тариф:</label>
          <div className={styles.tariffContainer}>
            <label className={styles.tariffOption}>
              <input 
                type="radio" 
                value="minute" 
                checked={selectedTariff === 'minute'} 
                onChange={(e) => setSelectedTariff(e.target.value)} 
              />
              Поминутный ({selectedCar.price.minute} ₽/мин)
            </label>
            <label className={styles.tariffOption}>
              <input 
                type="radio" 
                value="hour" 
                checked={selectedTariff === 'hour'} 
                onChange={(e) => setSelectedTariff(e.target.value)} 
              />
              Почасовой ({selectedCar.price.hour} ₽/час)
            </label>
          </div>
        </div>
      )}

      <div className={styles.formGroup}>
        <label className={styles.label}>Начало аренды:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Выберите дату и время"
          className={styles.datePickerInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Окончание аренды:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Выберите дату и время"
          className={styles.datePickerInput}
        />
      </div>

      {/* Новое поле для отображения общей стоимости */}
      {totalCost > 0 && (
        <div className={styles.totalCost}>
          Итоговая стоимость: <span>{totalCost.toFixed(2)} ₽</span>
        </div>
      )}

      <button type="submit" className={styles.submitButton}>
        Забронировать
      </button>
    </form>
  );
};

export default BookingForm;