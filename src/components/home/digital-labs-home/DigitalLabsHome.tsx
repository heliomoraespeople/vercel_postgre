import Image from 'next/image';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './DigitalLabsHome.module.css';

const DigitalLabsHome: React.FC = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  const isDesktop = windowSize.width >= 640;
  let imageQuotient = 1.3;

  if (windowSize.width >= Breakpoints.xl) {
    imageQuotient = 1;
  }

  return (
    <div className={styles.bg}>
      <div className={`${styles.container}`}>
        <div className={`${styles.img}`}>
          {isDesktop ? (
            <Image
              src="/digilabs/home-digital-labs.svg"
              width={479 / imageQuotient}
              height={642 / imageQuotient}
              alt="Digital Lab"
            />
          ) : (
            <Image
              src="/digilabs/home-digital-labs-mobile.svg"
              width={432 / imageQuotient}
              height={280 / imageQuotient}
              alt="Digital Lab"
            />
          )}
        </div>
        <div className={styles.textWrapper}>
          <h4 className="text-cinza-100">ENERGISA</h4>
          <h2 className="text-cinza-100">DIGITAL LABS</h2>
          <p className="text-cinza-300 mb-8">
            O Energisa Digital Labs é um centro de excelência em inteligência
            artificial que visa realizar projetos importantes com colaboradores
            e suas ideias de inovação. O EDL promove a cultura de projetos
            ágeis, trocas de conhecimento entre equipes e a Cultura Data-driven.
          </p>
          <h5 className="text-cinza-200 mb-4">INTELIGÊNCIA ARTIFICIAL</h5>
          <h5 className="text-cinza-200 mb-4">APRENDIZADO DE MÁQUINA</h5>
          <h5 className="text-cinza-200 mb-4">APRENDIZAGEM PROFUNDA</h5>
          <ButtonLink
            label="Conhecer o Digital Labs"
            color="cinza-100"
            onClick={() => router.push('/digital-labs')}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalLabsHome;
