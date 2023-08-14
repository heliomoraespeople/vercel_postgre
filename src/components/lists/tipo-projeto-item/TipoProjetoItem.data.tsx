import tiposProgramas from '../../../models/enums/tiposProgramas';
import { ITipoProjetoItem } from './TipoProjetoItem';

const programaEnova: ITipoProjetoItem = {
  title: tiposProgramas.enova,
  text: (
    <>
      <p className="mb-3">
        Para projetos simples, de baixo orçamento e com execução rápida.
      </p>
      <p>
        Aqui, pequenas ideias, que podem fazer a diferença no dia-a-dia, ganham
        a oportunidade de serem implementadas.
      </p>
    </>
  ),
  imgSrc: '/tipos_enova.jpg',
  complexity: 'Baixa',
  deadline: '4 meses',
  value: 'Até R$ 30k',
  buttonLink: '/programas-inovacao/enova'
};

const experimentacao: ITipoProjetoItem = {
  title: tiposProgramas.experimentacao,
  text: (
    <p>
      Projeto para validação de hipóteses em pequena escala. Teste de produtos de mercado (hardware ou software) ou atuação em parceria com o Energisa Digital Labs, para desenvolvimento de pequenas soluções (software).
    </p>
  ),
  imgSrc: '/tipos_experimentacao.jpg',
  complexity: 'Baixa/Média',
  deadline: '6 meses',
  value: 'Sem limite, com aprovação por alçadas',
  buttonLink: '/programas-inovacao/experimentacao'
};

const preProjeto: ITipoProjetoItem = {
  title: tiposProgramas.preProjeto,
  text: (
    <p>
      Realização de um estudo detalhado com objetivo de construir um mapa de implantação do projeto/produto com análise robusta de viabilidade técnico-econômica. 
    </p>
  ),
  imgSrc: '/tipos_preprojeto.jpg',
  complexity: 'Média/Alta',
  deadline: '1 Ano',
  value: 'Sem limite, com aprovação por alçadas',
  buttonLink: '/programas-inovacao/pre-projeto'
};

const pd: ITipoProjetoItem = {
  title: tiposProgramas.pd,
  text: (
    <p>
     Projeto no âmbito do programa regulado da ANEEL, que leva à implementação de produtos e/ou processos novos. Necessário preencher os requisitos mínimos, definidos no programa ANEEL.
    </p>
  ),
  imgSrc: '/tipos_pd.jpg',
  complexity: 'Alta',
  deadline: '1,5 ano',
  value: 'Sem limite, com aprovação pelo CEO',
  buttonLink: '/programas-inovacao/p-d'
};

export const TipoProjetoItemData = {
  programaEnova,
  experimentacao,
  preProjeto,
  pd
};

export const TipoProjetoItemDataArray = [
  programaEnova,
  experimentacao,
  preProjeto,
  pd
];
