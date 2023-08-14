import Responsabilidades from '../../../models/enums/Responsabilidades';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';
import { IEquipeFilterGroup } from './EquipeFiltroArvore';

const base: IEquipeFilterGroup[] = [
  {
    groupName: Responsabilidades.COPR,
    filters: [
      {
        filterName: Responsabilidades.CoordenadorCOPR,
        filterId: ResponsabilidadesIDs.COPR
      },
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
      },
      {
        filterName: Responsabilidades.GestaoDesempenho,
        filterId: ResponsabilidadesIDs.GestaoDesempenho
      }
    ]
  },
  {
    groupName: Responsabilidades.GEST,
    filterId: ResponsabilidadesIDs.GEST,
    filters: []
  },
  {
    groupName: Responsabilidades.GEIN,
    filters: [
      {
        filterName: Responsabilidades.GerenteGEIN,
        filterId: ResponsabilidadesIDs.GEIN
      },
      {
        filterName: Responsabilidades.COPI,
        filterId: ResponsabilidadesIDs.COPI,
        subFilters: [
          {
            filterName: Responsabilidades.CoordenadorCOPI,
            filterId: ResponsabilidadesIDs.COPI
          },
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
        ]
      },
      {
        filterName: Responsabilidades.COGI,
        filterId: ResponsabilidadesIDs.COGI,
        subFilters: [
          {
            filterName: Responsabilidades.CoordenadorCOGI,
            filterId: ResponsabilidadesIDs.COGI
          },
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
        ]
      }
    ]
  },
  // {
  //   groupName: Responsabilidades.GENN,
  //   filterId: ResponsabilidadesIDs.GENN,
  //   filters: []
  // },
  {
    groupName: Responsabilidades.GETD,
    filters: [
      {
        filterName: Responsabilidades.GerenteGETD,
        filterId: ResponsabilidadesIDs.GETD
      },
      {
        filterName: Responsabilidades.COPD,
        filterId: ResponsabilidadesIDs.COPD
      },
      {
        filterName: Responsabilidades.COTD,
        filterId: ResponsabilidadesIDs.COTD
      },
      {
        filterName: Responsabilidades.CODS,
        filterId: ResponsabilidadesIDs.CODS
      }
    ]
  }
];
export const FiltroEquipesData = {
  base
};
