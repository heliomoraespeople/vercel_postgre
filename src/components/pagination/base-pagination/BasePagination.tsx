import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';
import styles from './BasePagination.module.css';

export interface IBasePagination {
  totalEntries: number;
  entriesPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  refToTop?: MutableRefObject<HTMLDivElement>;
  filterActive?: any
}

const BasePagination: React.FC<IBasePagination> = ({
  totalEntries,
  entriesPerPage,
  setCurrentPage,
  currentPage,
  filterActive
}) => {
  const entriesCount = Math.ceil(totalEntries / entriesPerPage);
  const maxDisplayedPages = 5;

  const getPageNumbers = (): number[] => {
    const pages = [];

    let startRange = Math.max(
      currentPage - Math.floor(maxDisplayedPages / 2),
      1
    );
    const endRange = Math.min(startRange + maxDisplayedPages - 1, entriesCount);

    if (endRange - startRange + 1 < maxDisplayedPages) {
      startRange = Math.max(endRange - maxDisplayedPages + 1, 1);
    }

    for (let i = startRange; i <= endRange; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
    jumpToTop();
  };

  const handlePrevious = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      jumpToTop();
    }
  };

  const handleNext = (): void => {
    if (currentPage < entriesCount) {
      setCurrentPage(currentPage + 1);
      jumpToTop();
    }
  };

  const jumpToTop = (): void => {
    const pageHeight = document.documentElement.scrollHeight;
    const scrollDistance = pageHeight - pageHeight + 400;
    window.scrollTo({
      behavior: 'smooth',
      top: scrollDistance
    });
  };

  useEffect(() => {
    filterActive?.length > 0 && setCurrentPage(1);
  }, [filterActive]);

  const renderPageNumbers = (): JSX.Element[] => {
    const pageNumbers = getPageNumbers();

    return pageNumbers.map(page => (
      <button
        key={page}
        className={`${styles.button} ${
          currentPage === page ? styles.active : ''
        }`}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className={`${styles.container}`}>
      <button
        className={`${styles.button} ${styles.prev} ${
          currentPage > 1 ? styles.active : ''
        }`}
        onClick={handlePrevious}
        disabled={currentPage < 1}
      >
        Anterior
      </button>

      {renderPageNumbers()}

      <button
        className={`${styles.button} ${styles.next} ${
          currentPage < entriesCount ? styles.active : ''
        }`}
        onClick={handleNext}
        disabled={currentPage > entriesCount}
      >
        Próxima
      </button>
    </div>
  );
};

export default BasePagination;
