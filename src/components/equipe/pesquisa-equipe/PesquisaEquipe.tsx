import { useEquipe } from '../../../context/EquipeContext';
import CardEquipePesquisa from '../../cards/card-equipe-pesquisa/CardEquipePesquisa';
import { useEffect, useState } from 'react';
import ModalFiltroEquipes from '../../modals/filtro-equipes-mobile/ModalFiltroEquipes';
import FluxogramaEquipe from '../fluxograma-equipe/FluxogramaEquipe';
import styles from './PesquisaEquipe.module.css';
import { CardEquipePesquisaData } from '../../cards/card-equipe-pesquisa/CardEquipePesquisa.data';
import BasePagination from '../../pagination/base-pagination/BasePagination';

const PesquisaEquipe: React.FC = () => {
  const {
    setFilters,
    funcionariosFiltrados,
    funcionarios,
    setFuncionarios,
    resetFilters
  } = useEquipe();
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);


  const entriesPerPage = 8;

  const lastEntryIndex = currentPage * entriesPerPage;
  const firstEntryIndex = lastEntryIndex - entriesPerPage;

  useEffect(() => {
    setFuncionarios(CardEquipePesquisaData.funcionarios);
  }, []);

  const handleSearchTextChange = (text: string): void => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchText: text
    }));
  };

  const searchResults = funcionariosFiltrados(funcionarios).map(
    (item, index) => {
      return (
        <CardEquipePesquisa
          key={index}
          id={item.id}
          filterID={item.filterID}
          foto={item.foto}
          nome={item.nome}
          responsabilidade={item.responsabilidade}
          email={item.email}
        />
      );
    }
  );

  return (
    <>
      <ModalFiltroEquipes showModal={modal} setShowModal={setModal} />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h5>
            estrutura <span>Organizacional</span>
          </h5>
          <p>
            Conheça os colaboradores que fazem parte da Diretoria de Estratégia,
            Inovação e Novos Negócios.
          </p>
          <p className={styles.infoOrganograma}>Clique nas áreas do organograma para filtrar os funcionários de cada sessão.</p>
        </div>
        <FluxogramaEquipe />

        <div className={styles.filtroMobile}>
          <button onClick={() => setModal(true)}>
            <picture>
              <img alt="Filtros" src="/projetos/filtro.svg" />
            </picture>
            <p>Filtros</p>
          </button>

          <div className={styles.resetFilter}>
            <button onClick={() => resetFilters()}>Limpar filtros</button>
          </div>
        </div>

        <div>
          <div className={styles.searchSection}>
            <div className={styles.sectionRight}>
              <div className={`${styles.searchArea} text-cinza-200`}>
                <p>Pesquise um nome de colaborador que você queira encontrar</p>
                <div className={styles.projetosInput}>
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Buscar por nome ou responsabilidade"
                    onChange={e => {handleSearchTextChange(e.target.value);
                      setActive(e.target.value);
                    }}
                  />{' '}
                  <button>Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {searchResults.slice(firstEntryIndex, lastEntryIndex)}
        </div>

        <BasePagination
          totalEntries={searchResults.length}
          entriesPerPage={entriesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          filterActive={active}
        />
      </div>
    </>
  );
};

export default PesquisaEquipe;
