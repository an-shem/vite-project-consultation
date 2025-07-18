import { useState, type JSX } from 'react';
import styles from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>('Sandwich: ');

  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread 🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese 🧀`);
  }
  function handleAddBacon(): void {
    setSandwich(`${sandwich} Bacon 🥓`);
  }
  function handleReset(): void {
    setSandwich(``);
  }

  return (
    <div className={styles.container}>
      <h2>Sandwich</h2>
      <img src="https://i.pinimg.com/originals/c5/23/19/c52319c9e6b2b96516ab23b0bd70670b.jpg" alt="" />
      <p>{sandwich}</p>
      <div className={styles.btnContainer}>
        <button type="button" className={styles.btn} onClick={handleAddBread}>
          Add Bread
        </button>
        <button type="button" className={styles.btn} onClick={handleAddCheese}>
          Add Cheese
        </button>
        <button type="button" className={styles.btn} onClick={handleAddBacon}>
          Add Bacon
        </button>
        <button type="button" className={styles.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
