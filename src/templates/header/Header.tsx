import { ReactElement, useEffect, useState } from 'react';
import LogoHeader from '../../components/icons/logo-header/LogoHeader';
import styles from './Header.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import Breakpoints from '../../models/enums/Breakpoints';
import DropdownProgramas from './DropdownProgramas';
import LinkWrapper from './LinkWrapper';
import menuItems, { IMenuItem } from '../../lib/menuItems';
import DropdownNavMobile from './DropdownNavMobile';
import IconeHamburger from '../../components/icons/menu-mobile/IconeHamburger';

const Header: React.FC = () => {
  const windowSize = useWindowSize();

  const [navBackground, setNavBackground] = useState<boolean>(false);
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const isLg = windowSize.width > Breakpoints.lg;
  const isMd = windowSize.width > Breakpoints.md;
  const isSm = windowSize.width > Breakpoints.sm;
  const headerHeight = isLg ? 80 : 52;

  const changeBackground = (): void => {
    if (window.scrollY >= headerHeight) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  const activateDropdown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event?.stopPropagation();
    setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
  };

  const renderNavElement = (): ReactElement => {
    if (windowSize.width > Breakpoints.lg - 1) {
      return (
        <nav className={`${styles.navDesktop} lg:order-2`}>
          <ul>
            {menuItems.map((menuItem: IMenuItem, index: number) => {
              if (menuItem.href === '/programas-inovacao') {
                return (
                  <LinkWrapper
                    key={index}
                    setIsDropdownOpen={setIsDropdownOpen}
                    className={isDropdownOpen ? styles.active : ''}
                  >
                    <>
                      <button onClick={event => activateDropdown(event)}>
                        {menuItem.label}
                      </button>
                      {isDropdownOpen && (
                        <DropdownProgramas
                          setIsDropdownOpen={setIsDropdownOpen}
                        />
                      )}
                    </>
                  </LinkWrapper>
                );
              } else {
                return (
                  <LinkWrapper
                    key={index}
                    setIsDropdownOpen={setIsDropdownOpen}
                    href={menuItem.href}
                    exact={menuItem.href === '/'}
                  >
                    <span>{menuItem.label}</span>
                  </LinkWrapper>
                );
              }
            })}
          </ul>
        </nav>
      );
    } else {
      return (
        <>
          {isSm ? (
            <>
              {isMenuMobileOpened && (
                <DropdownNavMobile
                  setIsMenuMobileOpened={setIsMenuMobileOpened}
                  setIsDropdownOpen={setIsDropdownOpen}
                  activateDropdown={activateDropdown}
                  isDropdownOpen={isDropdownOpen}
                />
              )}
            </>
          ) : (
            <DropdownNavMobile
              setIsMenuMobileOpened={setIsMenuMobileOpened}
              setIsDropdownOpen={setIsDropdownOpen}
              activateDropdown={activateDropdown}
              isDropdownOpen={isDropdownOpen}
              mobileMenuStatus={!isMenuMobileOpened}
            />
          )}
        </>
      );
    }
  };

  console.log(isSm);

  return (
    <div
      className={[styles.container, navBackground && styles.activeBg].join(' ')}
    >
      {windowSize.width > Breakpoints.sm ? (
        <div className={`${styles.wrapper} wrapper-geral`}>
          <>
            <div className="lg:hidden flex items-center">
              <LinkWrapper
                key={1}
                setIsDropdownOpen={setIsDropdownOpen}
                className={
                  isMenuMobileOpened ? styles.activeMobile : styles.navMobile
                }
              >
                <button
                  className="flex items-center"
                  onClick={() => {
                    setIsMenuMobileOpened(isOpen => !isOpen);
                  }}
                >
                  <IconeHamburger
                    color={isMenuMobileOpened ? '#005174' : '#fff'}
                    large={isSm}
                  />
                  <p className="ml-3">MENU</p>
                </button>
              </LinkWrapper>
            </div>

            {renderNavElement()}

            <LogoHeader isLarge={isMd} />

            {windowSize.width > Breakpoints.sm && (
              <div className="lg:order-3 lg:flex items-center bg-verdeCitrico hover:bg-verdeCitricoLight text-cinza-200 p-3 rounded-md">
                <div className="font-normal text-right">
                  <a
                    href="https://plataformaenova.energisa.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">Minha ideia </span>
                    <br />
                    <span className="text-xs">Acompanhar ou Cadastrar</span>
                  </a>
                </div>
              </div>
            )}
          </>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <LogoHeader isLarge={isMd} />
          </div>
          <div className={`${styles.wrapper} wrapper-geral`}>
            <>
              <div className="lg:hidden flex items-center">
                <LinkWrapper
                  key={1}
                  setIsDropdownOpen={setIsDropdownOpen}
                  className={
                    isMenuMobileOpened ? styles.activeMobile : styles.navMobile
                  }
                >
                  <button
                    className="flex items-center"
                    onClick={() => {
                      setIsMenuMobileOpened(isOpen => !isOpen);
                    }}
                  >
                    <IconeHamburger
                      color={isMenuMobileOpened ? '#005174' : '#fff'}
                      large={isSm}
                    />
                    <p className="ml-3">MENU</p>
                  </button>
                </LinkWrapper>
              </div>

              {renderNavElement()}

              <div className="lg:order-3 lg:flex items-center bg-verdeCitrico hover:bg-verdeCitricoLight text-cinza-200 p-3 rounded-md">
                <div className="font-normal text-right">
                  <a
                    href="https://plataformaenova.energisa.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">Minha ideia </span>
                    <br />
                    <span className="text-xs">Acompanhar ou Cadastrar</span>
                  </a>
                </div>
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
