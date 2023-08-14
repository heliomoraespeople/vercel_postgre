import tiposAreaAlvo from '../enums/tiposAreaAlvo';
import tiposProgramas from '../enums/tiposProgramas';

type statuses = 'concluido' | 'andamento' | 'planejamento';
type anosAprovacoes =
  | '2022'
  | '2021'
  | '2020'
  | '2019'
  | '2018'
  | '2017'
  | '2016'
  | '2015'
  | '2014';
type empresasAplicadas = '1' | '2' | '3' | '4' | '5' | '6';

export default interface IProjeto {
  capaImagesSrc: string[];
  cardImgSrc: string;
  imgAlt: string;
  title: string;
  areaAlvo: tiposAreaAlvo;
  investimento: string | number;
  dono: string;
  gerente: string;
  tipoPrograma: tiposProgramas;
  status: statuses;
  listView?: boolean;
  id: string;
  descricao: string;
  anoAprovacao: anosAprovacoes;
  anoImplementacao: string;
  empresaAplicada: empresasAplicadas;
  resultados: string;
  descricaoCard: string;
}
