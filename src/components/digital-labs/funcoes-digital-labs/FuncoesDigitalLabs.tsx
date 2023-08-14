import styles from './FuncoesDigitalLabs.module.css';

const gridItems = [
  {
    title: 'Dono do Produto',
    subtitle: 'Product Owner - PO',
    content: 'Este é o profissional que estabelece a visão do produto, determina o roadmap e prioriza o backlog.'
  },
  {
    title: 'Facilitador Agile',
    subtitle: 'Scrum Master - SM',
    content: 'Este indivíduo facilita as cerimônias ágeis.'
  },
  {
    title: 'Cientista de Dados',
    subtitle: 'Data Scientist – DS',
    content:
      'Este profissional planeja, modela e constrói soluções de análises avançadas e inteligência artificial.'
  },
  {
    title: 'Engenheiro de Dados',
    subtitle: 'Data Engineer – DE',
    content:
      'Este profissional é responsável pela extração, modelagem e disponibilização de dados para os cientistas de dados.'
  },
  {
    title: 'Arquiteto de Soluções',
    subtitle: 'Solution Architect – SA',
    content: 'Esta função envolve a análise e o desenho da arquitetura do software.'
  },
  {
    title: 'Designer',
    subtitle: 'UX Designer – UX',
    content:
      'Este profissional compreende as necessidades de negócio e orienta o design da experiência do usuário.'
  }
];

const FuncoesDigitalLabs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <picture>
          <img alt="Funções" src="/digilabs/funcoes.png" />
        </picture>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>FUNÇÕES NO DIGITAL LABS</h3>
        <p className={styles.subtitle}>No Digital Labs, temos um time multidisciplinar:</p>
        <div className={styles.grid}>
          {gridItems.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              <p className={styles.gridItemTitle}>{item.title}</p>
              <p className={styles.gridItemSubtitle}>{item.subtitle}</p>
              <p className={styles.gridItemContent}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuncoesDigitalLabs;
