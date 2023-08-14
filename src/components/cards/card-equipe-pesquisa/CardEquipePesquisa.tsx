import Responsabilidades from '../../../models/enums/Responsabilidades';
import styles from './CardEquipePesquisa.module.css';

export interface ICardEquipePesquisa {
  id: number;
  filterID: string;
  foto: string;
  nome: string;
  responsabilidade: Responsabilidades;
  email: string;
}

const CardEquipePesquisa: React.FC<ICardEquipePesquisa> = ({
  foto,
  nome,
  responsabilidade,
  email,
}) => {
  return (
    <div className={styles.cardArea}>
      <div className={styles.cardImage}>
        <img src={foto} alt="Foto Colaborador" />
      </div>
      <div>
        <div className={styles.cardName}>
          <p>{nome}</p>
        </div>
        <div className={styles.cardInfo}>
          <p>Atua em</p>
          <p>{responsabilidade}</p>
        </div>
        <div className={styles.cardInfo}>
          <p>Contato</p>
          <p>{email.length >= 30 ? email.split('energisa').join('energisa\n') : email}</p>
        </div>
      </div>
    </div>
  );
};

export default CardEquipePesquisa;
