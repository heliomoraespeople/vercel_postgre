import { Dispatch, FC, SetStateAction } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import LinkWrapper from './LinkWrapper';
import styles from './DropdownProgramas.module.css';
import tiposProgramas from '../../models/enums/tiposProgramas';

type Props = {
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownProgramas: FC<Props> = ({ setIsDropdownOpen }) => {
  const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false));

  return (
    <div className={styles.menuFluxos} ref={dropdownRef}>
      <ul>
        <LinkWrapper
          href="/programas-inovacao"
          setIsDropdownOpen={setIsDropdownOpen}
          className={styles.title}
          exact
        >
          <span>Conhecer Programas de Inovação</span>
        </LinkWrapper>
        <div className={styles.subtitle}>Tipos de Programas</div>
        <div className={styles.links}>
          <LinkWrapper
            href="/programas-inovacao/enova"
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <span>{tiposProgramas.enova}</span>
          </LinkWrapper>
          <LinkWrapper
            href="/programas-inovacao/pre-projeto"
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <span>{tiposProgramas.preProjeto}</span>
          </LinkWrapper>
          <LinkWrapper
            href="/programas-inovacao/experimentacao"
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <span>{tiposProgramas.experimentacao}</span>
          </LinkWrapper>
          <LinkWrapper
            href="/programas-inovacao/p-d"
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <span>{tiposProgramas.pd}</span>
          </LinkWrapper>
        </div>
      </ul>
    </div>
  );
};

export default DropdownProgramas;
