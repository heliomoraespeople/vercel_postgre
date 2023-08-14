import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';
import IFuncionario from '../models/interfaces/Funcionario';
import Responsabilidades from '../models/enums/Responsabilidades';

interface IFilters {
  responsibilidade: Set<string>;
  searchText: string;
}

interface IEquipeContext {
  funcionarios: IFuncionario[];
  setFuncionarios: Dispatch<SetStateAction<IFuncionario[]>>;
  activeFilterDropdown: Responsabilidades;
  setActiveFilterDropdown: Dispatch<SetStateAction<Responsabilidades>>;
  funcionariosFiltrados: (items: IFuncionario[]) => IFuncionario[];
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
  handleSetFilter: (value: string, active: boolean) => void;
  resetFilters: () => void
}

interface IEquipeProvider {
  children: ReactNode;
}

const EquipeContext = createContext<IEquipeContext>(null);

const EquipeProvider: FC<IEquipeProvider> = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState<IFuncionario[]>([]);
  const [activeFilterDropdown, setActiveFilterDropdown] =
    useState<Responsabilidades>(null);
  const [filters, setFilters] = useState<IFilters>({
    responsibilidade: new Set(),
    searchText: ''
  });

  const funcionariosFiltrados = (
    funcionarios: IFuncionario[]
  ): IFuncionario[] =>
    funcionarios.filter(funcionario => {
      // Filtragem por categoria
      if (
        filters.responsibilidade.size > 0 &&
        !filters.responsibilidade.has(funcionario.filterID)
      ) {
        return false;
      }
      // Filtragem por texto
      if (filters.searchText.length > 0) {
        const searchRegex = new RegExp(filters.searchText, 'i');
        if (
          !searchRegex.test(funcionario.nome) &&
          !searchRegex.test(funcionario.responsabilidade)
        ) {
          return false;
        }
      }
      return true;
    });

  // const handleSetFilter = (value: string, active: boolean): void => {
  //   setFilters(prevFilters => {
  //     const newSet = new Set(prevFilters.responsibilidade);
  //     if (!active) {
  //       newSet.add(value);
  //     } else {
  //       newSet.delete(value);
  //     }
  //     return {
  //       ...prevFilters,
  //       responsibilidade: newSet
  //     };
  //   });
  // };

  const handleSetFilter = (value: string, active: boolean): void => {
    setFilters(prevFilters => {
      const newSet = new Set(prevFilters.responsibilidade);
      if (!active) {
        newSet.add(value);
      } else {
        newSet.delete(value);
      }
      return {
        ...prevFilters,
        responsibilidade: newSet
      };
    });
  };

  const resetFilters = (): void => {
    setFilters({
      responsibilidade: new Set(),
      searchText: ''
    });
  };

  return (
    <EquipeContext.Provider
      value={{
        activeFilterDropdown,
        setActiveFilterDropdown,
        funcionarios,
        setFuncionarios,
        funcionariosFiltrados,
        filters,
        setFilters,
        handleSetFilter,
        resetFilters
      }}
    >
      {children}
    </EquipeContext.Provider>
  );
};

function useEquipe(): IEquipeContext {
  const context = useContext(EquipeContext);
  if (!context) {
    throw new Error('useEquipe must be used within an EquipeProvider');
  }
  return context;
}

export { useEquipe, EquipeProvider };
