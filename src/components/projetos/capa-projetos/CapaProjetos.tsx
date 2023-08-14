import { useCallback } from 'react';
import generateBreadCrumbText from '../../../lib/generateBreadcrumbText';
import BreadCrumbBase from '../../breadcrumbs/breadcrumb-base/BreadCrumbBase';
import styles from './CapaProjetos.module.css';

const CapaProjetos: React.FC = () => {
  const getDefaultTextGenerator = useCallback(generateBreadCrumbText, []);
  return (
    <div className={`${styles.container} text-branco`}>
      <div className={styles.sectionLeft}>
        <BreadCrumbBase getDefaultTextGenerator={getDefaultTextGenerator} />
        <div className="capa-title">
          <p>
            Nossos
            <br />
            <span className="font-extrabold">Projetos</span>
          </p>
        </div>
        <div className={styles.textWrapper}>
          <p>
          Na Energisa, você encontra projetos nas mais diversas áreas de inovação, alguns deles já executados e outros em andamento. Abaixo, você pode conhecer o nosso portfólio de projetos de inovação.
          </p>
        </div>
      </div>
      <div className={styles.sectionRight}>
        <video
          className={styles.imgBanner}
          width="100%"
          height="100%"
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/projetos/capa.mp4" type="video/mp4" />
          <picture>
            <img
              className={styles.imgBanner}
              src="/projetos/fallback.jpg"
              alt="Banner"
            />
          </picture>
        </video>
      </div>
    </div>
  );
};

export default CapaProjetos;
