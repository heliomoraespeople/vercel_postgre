import { ReactElement, useEffect, useState } from 'react';
import { useProjetos } from '../../../context/ProjetosContext';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import AccordionFiltroProjetos from '../../accordions/filtro-projetos/AccordionFiltroProjetos';
import { AccordionFiltroProjetosData } from '../../accordions/filtro-projetos/AccordionFiltroProjetos.data';
import CardProjetosPesquisa, {
  ICardProjetosPesquisa
} from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa';
import { CardProjetosPesquisaData } from '../../cards/card-projetos-pesquisa/CardProjetosPesquisa.data';
import CarouselOutcomeData from '../../carousels/carousel-outcome-data/CarouselOutcomeData';
import RoundChart from '../../charts/round-chart/RoundChart';
import ProjectsPerYear from '../../charts/projects-per-year/ProjectsPerYear';
import GridButton from '../../icons/grid-list-view/GridButton';
import ListButton from '../../icons/grid-list-view/ListButton';
import ModalDetalheProjeto from '../../modals/detalhe-projeto/ModalDetalheProjeto';
import styles from './PesquisaProjetos.module.css';
import { RoundChartData } from '../../charts/round-chart/RoundChart.data';
import EmpresasChart from '../../charts/empresas-chart/EmpresasChart';
import { EmpresasChartData } from '../../charts/empresas-chart/EmpresasChart.data';
import BasePagination from '../../pagination/base-pagination/BasePagination';
import router from 'next/router';

const PesquisaProjetos: React.FC = () => {
  const windowSize = useWindowSize();
  const isXl = windowSize.width >= Breakpoints.xl;
  const {
    projetos,
    setProjetos,
    query,
    setQuery,
    buscarProjetos,
    activeBanner,
    setActiveProjeto,
    resetFilters,
    active
  } = useProjetos();

  const [showProjetoModal, setShowProjetoModal] = useState<boolean>();
  const [listView, setListView] = useState<boolean>(false);
  const [graphPadding, setGraphPadding] = useState<string>('');
  const [renderedBanner, setRenderedBanner] = useState<ReactElement>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const entriesPerPage = 8;

  const lastEntryIndex = currentPage * entriesPerPage;
  const firstEntryIndex = lastEntryIndex - entriesPerPage;

  useEffect(() => {
    setProjetos(Object.values(CardProjetosPesquisaData));
  }, []);

  useEffect(() => {
    if (isXl) {
      switch (activeBanner) {
        default:
        case 0:
          setGraphPadding('');
          setRenderedBanner(<CarouselOutcomeData />);
          break;
        case 1:
          setGraphPadding(styles.roundGraphWrapper);
          setRenderedBanner(<RoundChart key={1} data={RoundChartData.programsChart} />);
          break;
        case 5:
          setGraphPadding(styles.roundGraphWrapper);
          setRenderedBanner(<RoundChart key={2} data={RoundChartData.areasChart} />);
          break;
        case 2:
          setGraphPadding(styles.roundGraphWrapper);
          setRenderedBanner(<RoundChart key={3} data={RoundChartData.statusChart} />);
          break;
        case 4:
          setGraphPadding(styles.empresasGraphWrapper);
          setRenderedBanner(
            <EmpresasChart data={EmpresasChartData.empresasChart} />
          );
          break;
        case 3:
          setGraphPadding(styles.lineGraphWrapper);
          setRenderedBanner(<ProjectsPerYear />);
          break;
      }
    } else {
      setGraphPadding('');
      setRenderedBanner(<CarouselOutcomeData />);
    }
  }, [activeBanner, windowSize]);

  const searchResults = buscarProjetos(projetos).map(
    (item: ICardProjetosPesquisa) => {
      const activeModal =
        router?.query?.projeto && item.id === router?.query?.projeto;

      const cardItem = { ...item, activeModal };

      return (
        <CardProjetosPesquisa
          key={cardItem.id}
          {...cardItem}
          listView={listView}
          activeModal={cardItem.activeModal}
          onClick={() => {
            setActiveProjeto(cardItem);
            setShowProjetoModal(true);
          }}
        />
      );
    }
  );

  return (
    <div className={styles.wrapper}>
      <ModalDetalheProjeto
        setShowModal={setShowProjetoModal}
        showModal={showProjetoModal}
      />
      <div className={styles.container}>
        <div className={styles.filtro}>
          <AccordionFiltroProjetos
            itens={AccordionFiltroProjetosData.base.itens}
          />

          <div className={styles.resetFilter}>
            <button onClick={() => resetFilters()}>Limpar filtros</button>
          </div>
        </div>

        <div className={styles.sectionRight}>
          <div className={[styles.bannerWrapper, graphPadding].join(' ')}>
            {renderedBanner}
          </div>
          <div className={`${styles.searchArea} text-cinza-200`}>
            <p>Pesquise um projeto por nome ou por nome do responsável</p>
            <div className={styles.projetosInput}>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Buscar por projeto"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />{' '}
              <button>Buscar</button>
            </div>
          </div>

          <div className={styles.viewButtonsArea}>
            <p>Alterar a visualização</p>
            <div className={styles.viewButtons}>
              <button onClick={() => setListView(false)}>
                <GridButton active={!listView} />
              </button>
              <button onClick={() => setListView(true)}>
                <ListButton active={listView} />
              </button>
            </div>
          </div>

          <div
            className={`${styles.content} ${
              listView ? styles['content--list'] : ''
            }`}
          >
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
      </div>
    </div>
  );
};

export default PesquisaProjetos;
