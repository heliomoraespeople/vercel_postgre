import { ReactElement } from 'react';
import styles from './NossoProcesso.module.css';

const NossoProcesso: React.FC = () => {
  enum DisplayCondition {
    mobileOnly = 'mobile-only',
    destkopOnly = 'desktop-only'
  }

  const renderTitle = (display: DisplayCondition): ReactElement => (
    <div className={`${styles.title} ${display}`}>
      <h3>
        <span className="font-light">O NOSSO</span>
        <br /> PROCESSO
      </h3>
      <p>
        O diagrama ao lado ilustra o processo que uma ideia ou problema percorre
        para ser gerada, avaliada e ter uma solução aplicada.
      </p>
    </div>
  );

  return (
    <div className={styles.container}>
      {renderTitle(DisplayCondition.mobileOnly)}
      <div className={styles.image}>
        <picture>
          <img alt="Nosso Processo" src="/digilabs/nosso_processo.svg" />
        </picture>
      </div>
      <div className={styles.content}>
        {renderTitle(DisplayCondition.destkopOnly)}
        <h5>Metodologias e tecnologias</h5>
        <p>
          Em nosso processo, seguimos um caminho para gerar, avaliar e aplicar
          soluções para ideias e problemas. Utilizamos metodologias de design de
          produtos e facilitações, usando o design thinking para criar soluções
          inovadoras que atendam às necessidades dos nossos clientes e usuários.
        </p>
        <p>
          Além disso, usamos metodologias como{' '}
          <span className="bg-azulEscuro text-branco font-bold">Scrum</span>,
          que agiliza os processos de desenvolvimento de produtos, e{' '}
          <span className="bg-azulEscuro text-branco font-bold"> Kanban</span>,
          que organiza os projetos em um fluxo de tarefas. Também utilizamos
          diversas tecnologias digitais que facilitam e potencializam o processo
          de desenvolvimento como um todo.
        </p>
      </div>
    </div>
  );
};

export default NossoProcesso;
