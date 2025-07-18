import type { JSX } from 'react';
import Car from '../components/Car/Car';
import carImg from './img/car.webp';
import styles from './CarShop.module.css';

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car shop</h1>
      <h2>Cars</h2>
      <Car brand="Mercedes" color="black" />
      <Car brand="Audi" color="green" />
      <Car brand="Opel" color="pink" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="blue" />
      <Car brand="Lamborginy" color="grey" />
      <img src={carImg} alt="" className={styles.image} />
      <h3>Второй способ из папки public, без точки перед слеш</h3>
      <img src="/car2.webp" alt="" className={styles.image} />
    </div>
  );
}
