import TextsAtuacao from '../../generic/texts-como-atuamos/TextsAtuacao';
import styles from './ComoAtuamos.module.css';

const ComoAtuamos: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sectionLeft}`}>
        <h3 className={`${styles.title} text-branco`}>
          <span>Como</span>
          <br />
          atuamos
        </h3>
        <p className={`${styles.paragraph} text-branco`}>
        Para que as ideias virem realidade, elas passam por um processo de maturação e avaliação, para que possam posteriormente ser colocadas em prática. Quanto mais a ideia tiver alinhada com os objetivos da empresa, maior a chance de ser aprovada e implantada. Para isso, é muito importante que se conheça as áreas alvo de inovação e os programas existentes para captação de ideias.
        </p>

        <TextsAtuacao
          linkPath="/areas-alvo-inovacao"
          title="áreas alvo de inovação"
          buttonLink="Conhecer Áreas Alvo"
        >
          <p>
          São temas de grande relevância no mundo, que a Energisa utiliza como guias para os projetos de inovação. Essas áreas estão alinhadas com o planejamento estratégico da companhia.
          </p>
        </TextsAtuacao>

        <TextsAtuacao
          title="Programas de inovação"
          buttonLink="Conhecer Programas"
          linkPath="/programas-inovacao"
        >
          <>
            <p>
            São categorias de projetos onde o colaborador pode enquadrar suas ideias no momento da submissão. Esses programas funcionam como uma trilha que as ideias percorrem para se tornarem projetos reais. Eles se diferenciam pela complexidade, pelo tempo de execução e pelas competências envolvidas.
            </p>
          </>
        </TextsAtuacao>
      </div>

      <div className={`${styles.sectionRight}`}>
        <picture>
          <img src="/imgTeam.png" alt="" />
        </picture>
        <div className={`${styles.team}`}>
          <TextsAtuacao
            linkPath="/equipe"
            title="Equipe"
            buttonLink="Conhecer Equipe"
          >
            <p>
            A Energisa possui uma equipe dedicada a cuidar dos processos de Estratégia, Inovação e Novos Negócios de todo o Grupo. Um verdadeiro time disposto a fazer a Cultura de Inovação acontecer na Energisa.
            </p>
          </TextsAtuacao>
        </div>
      </div>
    </div>
  );
};

export default ComoAtuamos;
