import CardAI, { ICardAI } from '../../cards/card-ai/CardAI';
import { CardAIData } from '../../cards/card-ai/CardAI.data';
import styles from './InteligenciaArtificial.module.css';

const InteligenciaArtificial: React.FC = () => {
  const cardDataArray = Object.values(CardAIData);
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title} wrapper-geral`}>
        <h3>
        PRIMEIRO CENTRO DE EXCELÊNCIA EM INTELIGÊNCIA ARTIFICIAL NO SETOR ELÉTRICO BRASILEIRO
        </h3>
        <p>
        Implementamos o primeiro Centro de Excelência em inteligência artificial no setor elétrico brasileiro e utilizamos ferramentas como a Inteligência Artificial, Aprendizado de Máquina e Aprendizagem Profunda para acelerar e facilitar a integração de soluções avançadas de análise de dados.
        </p>
      </div>
      <div className={styles.cardsArea}>
        {cardDataArray.map((item: ICardAI, index: number) => (
          <CardAI {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InteligenciaArtificial;
