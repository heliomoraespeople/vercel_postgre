import tiposProgramas from '../../../models/enums/tiposProgramas';
import { resultadoContagem } from '../../calculateProjetos/calculateProjetos';
import { CardProjetosPesquisaData } from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa.data';
import { IProjetosFilter } from '../filtro-projetos-item/AccordionFiltroProjetosItem';
import { IAccordionFiltroProjetos } from './AccordionFiltroProjetos';
import montarFiltrosPorPropriedade from '../../calculateProjetos/generateFilters';

const projetos = CardProjetosPesquisaData;
const filtersAnoAprovacao: IProjetosFilter[] = montarFiltrosPorPropriedade(projetos, "anoAprovacao");
const filtersEmpresaAplicada: IProjetosFilter[] = montarFiltrosPorPropriedade(projetos, "empresaAplicada");

const base: IAccordionFiltroProjetos = {

  itens: [
    {
      groupName: 'Programas de Inovação',
      groupId: 'tipoPrograma',
      filters: [
        {
          filterName: 'Programa E-nova',
          quantity: resultadoContagem.qtdEnova,
          filterId: tiposProgramas.enova
        },
        {
          filterName: 'Experimentação',
          quantity: resultadoContagem.qtdExperimentacao,
          filterId: tiposProgramas.experimentacao
        },
        {
          filterName: 'Pré-Projeto',
          quantity: resultadoContagem.qtdPreProjeto,
          filterId: tiposProgramas.preProjeto
        },
        { filterName: 'P&D', quantity: resultadoContagem.qtdPD, filterId: tiposProgramas.pd }
      ]
    },
    // {
    //   groupName: 'Áreas Alvo de Inovação',
    //   groupId: 'areaAlvo',
    //   filters: [
    //     {
    //       filterName: 'Transição e Digitalização do Core Business',
    //       quantity: 0,
    //       filterId: tiposAreaAlvo.coreBusiness
    //     },
    //     {
    //       filterName: 'Ecossistema de Negócios',
    //       quantity: 0,
    //       filterId: tiposAreaAlvo.ecossistemaNegocios
    //     },
    //     {
    //       filterName: 'Experiência de Fidelização do Cliente',
    //       quantity: 0,
    //       filterId: tiposAreaAlvo.fidelizacaoCliente
    //     },
    //     {
    //       filterName: 'Organização Orientada a Dados',
    //       quantity: 0,
    //       filterId: tiposAreaAlvo.organizacaoOrientadaDados
    //     },
    //     {
    //       filterName: 'Inovação Sustentável',
    //       quantity: 0,
    //       filterId: tiposAreaAlvo.inovacaoSustentavel
    //     }
    //   ]
    // },
    {
      groupName: 'Status de Projetos',
      groupId: 'status',
      filters: [
        { filterName: 'Concluído', quantity: resultadoContagem.qtdConcluido, filterId: 'concluido' },
        { filterName: 'Em Andamento', quantity: resultadoContagem.qtdAndamento, filterId: 'andamento' },
        {
          filterName: 'Em Planejamento',
          quantity: resultadoContagem.qtdPlanejamento,
          filterId: 'planejamento'
        }
      ]
    },
    {
      groupName: 'Ano de Aprovação',
      groupId: 'anoAprovacao',
      filters: filtersAnoAprovacao
    },
    {
      groupName: 'Empresa Aplicada',
      groupId: 'empresaAplicada',
      filters: filtersEmpresaAplicada
    }
  ]
};

export const AccordionFiltroProjetosData = {
  base,
};


