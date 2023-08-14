import {
  FC,
  useContext,
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react';
import IProjeto from '../models/interfaces/Projeto';

interface IFilterParam {
  [key: string]: { filterGroupId: string; activeFilters: string[] };
}

interface IProjetosContext {
  projetos: IProjeto[];
  activeProjeto: IProjeto;
  setActiveProjeto: Dispatch<SetStateAction<IProjeto>>;
  setProjetos: Dispatch<SetStateAction<IProjeto[]>>;
  filterParam: IFilterParam;
  setFilterParam: Dispatch<SetStateAction<IFilterParam>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  buscarProjetos: (items: IProjeto[]) => IProjeto[];
  activeBanner: number;
  setActiveBanner: Dispatch<SetStateAction<number>>;
  resetFilters: () => void;
  active: any;
}

interface IProjetosProvider {
  children: ReactNode;
}

const ProjetosContext = createContext<IProjetosContext>(null);

const ProjetosProvider: FC<IProjetosProvider> = ({ children }) => {
  const initialFilterParam: IFilterParam = {
    tipoPrograma: {
      filterGroupId: 'tipoPrograma',
      activeFilters: []
    },
    areaAlvo: {
      filterGroupId: 'areaAlvo',
      activeFilters: []
    },
    status: {
      filterGroupId: 'status',
      activeFilters: []
    },
    anoAprovacao: {
      filterGroupId: 'anoAprovacao',
      activeFilters: []
    },
    empresaAplicada: {
      filterGroupId: 'empresaAplicada',
      activeFilters: []
    }
  };

  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [activeProjeto, setActiveProjeto] = useState<IProjeto>({} as IProjeto);
  const [filterParam, setFilterParam] =
    useState<IFilterParam>(initialFilterParam);
  const [query, setQuery] = useState<string>('');
  const [searchParam] = useState(['title', 'dono', 'gerente', 'descricao']);
  const [active, setActive] = useState<string[]>([]);
  const [activeBanner, setActiveBanner] = useState<number>(0);

  const buscarProjetosTexto = (item: IProjeto): boolean => {
    return searchParam.some(param => {
      return (
        item[param].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    });
  };

  const filterParamArray = Object.values(filterParam);
  useEffect(() => {
    const array = [];
    filterParamArray.forEach(param => {
      if (param.activeFilters.length)
        param.activeFilters.forEach(filter => array.push(filter));
    });
    setActive(array);
  }, [filterParam]);

  const buscarProjetos = (items: IProjeto[]): IProjeto[] => {
    return items.filter(item => {
      if (active.length === 0) {
        return buscarProjetosTexto(item);
      } else {
        const activeFilterGroups = Object.values(filterParam).filter(
          param => param.activeFilters.length > 0
        );
        return (
          activeFilterGroups.every(filterGroup =>
            filterGroup.activeFilters.includes(item[filterGroup.filterGroupId])
          ) && buscarProjetosTexto(item)
        );
      }
    });
  };

  const resetFilters = (): void => {
    setFilterParam(initialFilterParam);
  };

  return (
    <ProjetosContext.Provider
      value={{
        projetos,
        setProjetos,
        filterParam,
        setFilterParam,
        query,
        setQuery,
        buscarProjetos,
        activeBanner,
        setActiveBanner,
        activeProjeto,
        setActiveProjeto,
        resetFilters,
        active
      }}
    >
      {children}
    </ProjetosContext.Provider>
  );
};

function useProjetos(): IProjetosContext {
  const context = useContext(ProjetosContext);
  if (!context) {
    throw new Error('useProjetos must be used within an ProjetosProvider');
  }
  return context;
}

export { useProjetos, ProjetosProvider };
