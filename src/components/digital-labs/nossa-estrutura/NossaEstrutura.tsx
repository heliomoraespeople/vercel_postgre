import styles from './NossaEstrutura.module.css';

const NossaEstrutura: React.FC = () => {
  return (
    <div className={`${styles.container} wrapper-geral`}>
      <div className={styles.sectionRight}>
        <h3 className={styles.title}>
          <span className="font-light">Nossa</span>
          <br /> Estrutura
        </h3>

        <div className={styles.content}>
          <h4>conectando ideias</h4>
          <p>
            O Digital Labs é o centro para a promoção e auxílio nas etapas de
            ideação, desenvolvimento e evolução de produtos através de design,
            métodos ágeis e ferramentas data-driven. As estruturas responsáveis
            por esse sucesso incluem Unidades de Negócios, Times, Categorias e
            Tribos.
          </p>
        </div>
      </div>
      <div className={styles.sectionLeft}>
        <picture>
          <img alt="Nossa Estrutura" src="/digilabs/nossa_estrutura.svg" />
        </picture>
      </div>
    </div>
  );
};

export default NossaEstrutura;
