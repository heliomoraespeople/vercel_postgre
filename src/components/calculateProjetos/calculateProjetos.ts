import tiposProgramas from "../../models/enums/tiposProgramas";
import { CardProjetosPesquisaData } from "../cards/card-projetos-pesquisa/CardProjetosPesquisa.data";

function contarProjetos() {
  const projetos = CardProjetosPesquisaData;

  let qtdTotal = 0;

  let qtdExperimentacao = 0;
  let qtdEnova = 0;
  let qtdPreProjeto = 0;
  let qtdPD = 0;

  let qtdConcluido = 0;
  let qtdAndamento = 0;
  let qtdPlanejamento = 0;

  projetos.forEach((projeto) => {  

    qtdTotal++;
    
    if (projeto.tipoPrograma === tiposProgramas.experimentacao) {
      qtdExperimentacao++;
    }
    if (projeto.tipoPrograma === tiposProgramas.enova) {
      qtdEnova++;
    }
    if (projeto.tipoPrograma === tiposProgramas.preProjeto) {
      qtdPreProjeto++;
    }
    if (projeto.tipoPrograma === tiposProgramas.pd) {
      qtdPD++;
    }

    if (projeto.status === 'concluido') {
      qtdConcluido++;
    }
    if (projeto.status === 'andamento') {
      qtdAndamento++;
    }
    if (projeto.status === 'planejamento') {
      qtdPlanejamento++;
    }   

  });

  return {
    qtdTotal,
    qtdExperimentacao,
    qtdEnova,
    qtdPreProjeto,
    qtdPD,
    qtdConcluido,
    qtdAndamento,
    qtdPlanejamento
  };
}

export const resultadoContagem = contarProjetos();