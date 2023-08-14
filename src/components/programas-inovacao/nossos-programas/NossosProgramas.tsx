import router from 'next/router';
import CardSolido from '../../cards/card-solido/CardSolido';
import styles from './NossosProgramas.module.css';

const NossosProgramas: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container}`}>
        <div className={`${styles.sectionLeft}`}>
          <div className={styles.title}>
            NOSSOS <span className="font-extrabold">PROGRAMAS</span>
          </div>
        </div>
        <div className={styles.sectionRight}>
          <picture>
            <img
              className={styles.imgBanner}
              src="/tipos_projetos.jpg"
              alt="Banner"
            />
          </picture>
        </div>
        <div className={`${styles.textWrapper} wrapper-geral`}>
          <div className={`${styles.textContainer}`}>
            <p>
              Para submeter sua ideia, é importante que ela esteja enquadrada em
              uma das{' '}
              <span className="bg-azulEscuro text-branco">
                Áreas Alvo de Inovação.
              </span>
            </p>
            <p className={styles.line}>
              A partir daí, você pode identificar o Programa adequado à sua
              ideia, considerando a descrição, a complexidade, o tempo de
              execução e as competências envolvidas.
            </p>
          </div>
          <CardSolido
            mode="light"
            buttonLabel="Conhecer Áreas Alvo de Inovação"
            className={styles.cardWrapper}
            text={
              <p>
                Conheça melhor as Áreas Alvo de Inovação para poder enviar o seu
                projeto.
              </p>
            }
            onClickButton={() => router.push('/areas-alvo-inovacao')}
          />
        </div>
      </div>
    </div>
  );
};

export default NossosProgramas;
