import Responsabilidades from '../../../models/enums/Responsabilidades';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';
import { IFilter } from '../equipe-filtro-arvore/EquipeFiltroArvore';

const subFiltersCopr: IFilter[] = [
  {
    filterName: Responsabilidades.GestaoPortfolio,
    filterId: ResponsabilidadesIDs.GestaoPortfolio
  },
  {
    filterName: Responsabilidades.PagamentosCadastro,
    filterId: ResponsabilidadesIDs.PagamentosCadastro
  },
  {
    filterName: Responsabilidades.GestaoOrcamentaria,
    filterId: ResponsabilidadesIDs.GestaoOrcamentaria
  },
  {
    filterName: Responsabilidades.ContratosAuditoria,
    filterId: ResponsabilidadesIDs.ContratosAuditoria
  },
  {
    filterName: Responsabilidades.ComprasViagens,
    filterId: ResponsabilidadesIDs.ComprasViagens
  }
];

const subfilterCopi: IFilter[] = [
  {
    filterName: Responsabilidades.GestaoGovernanca,
    filterId: ResponsabilidadesIDs.GestaoGovernanca
  },
  {
    filterName: Responsabilidades.RelacionamentoEcossistema,
    filterId: ResponsabilidadesIDs.RelacionamentoEcossistema
  },
  {
    filterName: Responsabilidades.RelacionamentoInterno,
    filterId: ResponsabilidadesIDs.RelacionamentoInterno
  }
];

const subfilterCogi: IFilter[] = [
  {
    filterName: Responsabilidades.GestaoProjetos,
    filterId: ResponsabilidadesIDs.GestaoProjetos
  },
  {
    filterName: Responsabilidades.OrcamentoGCP,
    filterId: ResponsabilidadesIDs.OrcamentoGCP
  },
  {
    filterName: Responsabilidades.ENOVA,
    filterId: ResponsabilidadesIDs.ENOVA
  }
];

export const FluxogramaEquipeData = {
  subFiltersCopr,
  subfilterCogi,
  subfilterCopi
};
