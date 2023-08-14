import styles from './EmQueAplicamos.module.css';

const EmQueAplicamos: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.sectionRight}>
        <picture>
          <img alt="Trabalhadores e torre" src="/digilabs/aplicamos.png" />
        </picture>
      </div>
      <div className={`${styles.sectionLeft} wrapper-geral`}>
        <div className={styles.title}>
          <h3>
            Em que <span className="font-extrabold">aplicamos?</span>
          </h3>
          <p>
            Todos os projetos, estudos e trocas de conhecimento são aplicados
            para benefícios internos e externos à Energisa. Dos colaboradores
            aos clientes.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.contentTitle}>Interno</div>
            <div className={styles.contentSubtitle}>
              <p>Experiência do colaborador</p> <p>Operações do negócio</p>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Eficiência operacional</li>
                <li>Produtividade do colaborador</li>
                <li>Flexibilidade</li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>Externo</div>
            <div className={styles.contentSubtitle}>
              <p>Foco no cliente</p>
              <p>Novos modelos de negócio</p>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Experiência do cliente</li>
                <li>Novos produtos/serviços</li>
                <li>Receita por cliente</li>
                <li>Receitas por produto / serviço</li>
                <li>Novas receitas de novos clientes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmQueAplicamos;
