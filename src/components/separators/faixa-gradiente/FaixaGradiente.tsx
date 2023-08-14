import styles from './FaixaGradiente.module.css';

export interface IFaixaGradiente {
  direction?: 'vertical' | 'horizontal';
  margins?: string;
  size?: string;
}

const FaixaGradiente: React.FC<IFaixaGradiente> = ({
  direction = 'horizontal',
  margins,
  size = '90%'
}) => {
  return (
    <div
      style={{ margin: margins, width: size }}
      className={`${styles.container} ${styles[`container--${direction}`]}`}
    />
  );
};

export default FaixaGradiente;
