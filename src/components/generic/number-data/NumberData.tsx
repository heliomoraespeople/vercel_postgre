import { ReactNode } from 'react';
import styles from './NumberData.module.css';

export interface INumberData {
  number: string;
  text: ReactNode;
}

const NumberData: React.FC<INumberData> = ({ number, text }) => {
  return (
    <div className={`${styles.container}`}>
      <h3 className={`${styles.title} text-branco`}>{number}</h3>
      <p className={`${styles.text} text-azulEscuro`}>{text}</p>
    </div>
  );
};

export default NumberData;
