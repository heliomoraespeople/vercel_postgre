/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './NavMobile.module.css';
import IconArrow from '../../components/icons/arrow/IconArrow';
import LinkWrapper from './LinkWrapper';
import menuItems, { IMenuItem } from '../../lib/menuItems';

type Props = {
  setIsMenuMobileOpened: Dispatch<SetStateAction<boolean>>;
  activateDropdown: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isDropdownOpen: boolean;
};

const NavMobile: FC<Props> = ({
  setIsMenuMobileOpened,
  activateDropdown,
  isDropdownOpen
}) => {
  return (
    <nav className={styles.navMobile}>
      <ul>
        <div className={styles.headerMenu}>
          <button
            onClick={() => {
              setIsMenuMobileOpened(false);
            }}
          >
            <picture>
              <img src="/icon_arrow-left-menu.svg" alt="" />
            </picture>
          </button>
          <div className={styles.logoMobile}>
            <picture>
              <img src="/logo-menu-mobile.svg" alt="logo energisa" />
            </picture>
          </div>
        </div>

        {menuItems.map((menuItem: IMenuItem, index: number) => {
          if (menuItem.href === '/programas-inovacao') {
            return (
              <>
                <LinkWrapper
                  key={index}
                  setIsDropdownOpen={setIsMenuMobileOpened}
                >
                  <button
                    className={styles.menuItem}
                    onClick={event => activateDropdown(event)}
                  >
                    {menuItem.label}
                    <picture>
                      <img src="/icon_rigth-menu.svg" alt="" />
                    </picture>
                  </button>
                </LinkWrapper>

                {isDropdownOpen && (
                  <div className={styles.subMenu}>
                    <div className={styles.headerMenu}>
                      <button onClick={event => activateDropdown(event)}>
                        <picture>
                          <img src="/icon_arrow-left-menu.svg" alt="" />
                        </picture>
                      </button>
                      <div className={styles.logoMobile}>
                        <p>Programas de Inovação</p>
                      </div>
                    </div>

                    <div className={styles.menuItems}>
                      <LinkWrapper
                        href="/programas-inovacao"
                        className={styles.menuItem}
                        setIsDropdownOpen={setIsMenuMobileOpened}
                        exact
                      >
                        <span>Conhecer Programas de Inovação</span>
                      </LinkWrapper>

                      <div className={styles.submenuSubtitle}>
                        <p>Tipos de Programas</p>
                      </div>

                      <LinkWrapper
                        href="/programas-inovacao/enova"
                        className={styles.menuItem}
                        setIsDropdownOpen={setIsMenuMobileOpened}
                      >
                        <span>Programa E-nova</span>
                      </LinkWrapper>

                      <LinkWrapper
                        href="/programas-inovacao/experimentacao"
                        className={styles.menuItem}
                        setIsDropdownOpen={setIsMenuMobileOpened}
                      >
                        <span>Experimentação</span>
                      </LinkWrapper>

                      <LinkWrapper
                        href="/programas-inovacao/pre-projeto"
                        className={styles.menuItem}
                        setIsDropdownOpen={setIsMenuMobileOpened}
                      >
                        <span>Pré-Projeto</span>
                      </LinkWrapper>

                      <LinkWrapper
                        href="/programas-inovacao/p-d"
                        className={styles.menuItem}
                        setIsDropdownOpen={setIsMenuMobileOpened}
                      >
                        <span>P&D</span>
                      </LinkWrapper>
                    </div>
                  </div>
                )}
              </>
            );
          } else {
            return (
              <LinkWrapper
                key={index}
                href={menuItem.href}
                className={styles.menuItem}
                setIsDropdownOpen={setIsMenuMobileOpened}
                exact={menuItem.href === '/'}
              >
                <span>{menuItem.label}</span>
              </LinkWrapper>
            );
          }
        })}
        <a
          href="https://plataformaenova.energisa.com.br"
          target="_blank"
          rel="noreferrer"
        >
          <li
            className={`${styles.menuItem} ${styles.enovaRedirect}`}
            onClick={() => {
              setIsMenuMobileOpened(false);
            }}
            role="menuitem"
          >
            <div>
              <b>Minha ideia</b>
              <br />
              <p className={styles.subText}>Acompanhar ou Cadastrar</p>
            </div>
            <IconArrow color="#005174" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default NavMobile;
