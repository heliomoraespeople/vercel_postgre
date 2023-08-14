import { resultadoContagem } from "../../calculateProjetos/calculateProjetos";

function percentageProgramasInovacao(){

const experimentacao = (resultadoContagem.qtdExperimentacao / 100) * resultadoContagem.qtdTotal

const preProjeto = (resultadoContagem.qtdPreProjeto / 100) * resultadoContagem.qtdTotal

const enova = (resultadoContagem.qtdEnova / 100) * resultadoContagem.qtdTotal

const pd = (resultadoContagem.qtdPD / 100) * resultadoContagem.qtdTotal

const concluido = (resultadoContagem.qtdConcluido / 100) * resultadoContagem.qtdTotal
const andamento = (resultadoContagem.qtdAndamento / 100) * resultadoContagem.qtdTotal
const planejamento = (resultadoContagem.qtdPlanejamento / 100) * resultadoContagem.qtdTotal

return {experimentacao, preProjeto, enova, pd, concluido, andamento, planejamento};
}

export const resultPercent = percentageProgramasInovacao();