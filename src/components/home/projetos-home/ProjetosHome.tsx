import { useRouter } from 'next/router';
import ButtonLink from '../../buttons/link/ButtonLink';
import CardProjetos from '../../cards/card-projetos/CardProjetos';
import styles from './ProjetosHome.module.css';
import { CardProjetosPesquisaData } from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa.data';

const ProjetosHome: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.bg}>
      <div className={`${styles.container} wrapper-geral`}>
        <h1 className="uppercase">
          <span>Nós Somos</span> Inovação
        </h1>

        <div className={styles.infosBack}>
          <h4 className="uppercase">conheça os nossos projetos</h4>

          <p className="text-cinza-300">
            Quer saber mais sobre as inovações que estão acontecendo no Grupo
            Energisa? Aqui você encontrará projetos já executados e outros em
            andamento.
          </p>

          <ButtonLink
            className=""
            label="Ver mais projetos"
            color="cinza-100"
            onClick={() => router.push('/projetos')}
          />
        </div>

        <div className={`${styles.cards} wrapper-carousel`}>
          <CardProjetos
            title={CardProjetosPesquisaData[0].title}
            abstract={CardProjetosPesquisaData[0].descricaoCard}
            buttonLink="Ver mais"
            img={CardProjetosPesquisaData[0].capaImagesSrc[0]}
            path="projetos"
            query={CardProjetosPesquisaData[0].id}
          />
          <CardProjetos
            title={CardProjetosPesquisaData[1].title}
            abstract={CardProjetosPesquisaData[1].descricaoCard}
            buttonLink="Ver mais"
            img={CardProjetosPesquisaData[1].capaImagesSrc[0]}
            path="projetos"
            query={CardProjetosPesquisaData[1].id}
          />

          <CardProjetos
            title={CardProjetosPesquisaData[2].title}
            abstract={CardProjetosPesquisaData[2].descricaoCard}
            buttonLink="Ver mais"
            img={CardProjetosPesquisaData[2].capaImagesSrc[0]}
            path="projetos"
            query={CardProjetosPesquisaData[2].id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjetosHome;
