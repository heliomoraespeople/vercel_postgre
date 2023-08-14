import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import ButtonCTA from '../../buttons/call-to-action/ButtonCTA';
import styles from './CapaHome.module.css';

const CapaHome: React.FC = () => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= 640;
  const router = useRouter();
  return (
    <div className={`${styles.container} text-branco`}>
      <div className={`${styles.sectionLeft}`}>
        <div className={styles.title}>
          <p>
            ENERGISA <span className="font-normal">E</span> VOCÊ
          </p>
          <p className={styles.titleLg}>INOVANDO</p>
          <p>
            <span className="font-normal">O NOSSO</span> FUTURO!
          </p>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Quer saber como inovar na Energisa?
            <br />
            Clique abaixo e descubra!
          </p>
          <ButtonCTA
            primary
            size={isDesktop ? 'lg' : 'sm'}
            label="Conhecer nossos programas"
            onClick={() =>
              router.push({
                pathname: '/programas-inovacao',
                query: { verProgramas: true }
              })
            }
          />
        </div>
      </div>
      <div className={styles.sectionRight}>
        <video
          className="object-cover h-[364.5px]"
          width="100%"
          height="100%"
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/home.webm" type="video/webm" />
          <picture>
            <img
              className={styles.imgBanner}
              src={`/banner_${isDesktop ? 'desktop' : 'mobile'}.png`}
              alt="Banner"
            />
          </picture>
        </video>
      </div>
    </div>
  );
};

export default CapaHome;
