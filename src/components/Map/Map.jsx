import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

const Map = ({ cars, onCarSelect }) => {
  const position = [47.2357, 39.7015];
  const zoom = 12;

  return (
    <MapContainer 
      center={position} 
      zoom={zoom} 
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {cars.map(car => (
        <Marker key={car.id} position={car.coords}>
          <Popup>
            <div>
              <h3>{car.name}</h3>
              <p>Класс: {car.class}</p>
              <p>Статус: {car.status}</p>
              {/* Добавили отображение цены */}
              <p>Цена: {car.price.minute} ₽/мин</p> 
              {car.status === 'Доступен' && (
                <button onClick={() => onCarSelect(car.id)}>Забронировать</button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;