import { ReactNode, useCallback } from 'react';
import generateBreadCrumbText from '../../lib/generateBreadcrumbText';
import BreadCrumbBase from '../../components/breadcrumbs/breadcrumb-base/BreadCrumbBase';
import styles from './Capa.module.css';

export interface ICapa {
  title: ReactNode;
  body: ReactNode;
  videoPath: string;
}

const Capa: React.FC<ICapa> = ({ title, body, videoPath }) => {
  const getDefaultTextGenerator = useCallback(generateBreadCrumbText, []);

  return (
    <div className={`${styles.container} text-branco`}>
      <div className={`${styles.sectionLeft}`}>
        <BreadCrumbBase getDefaultTextGenerator={getDefaultTextGenerator} />
        <div className="capa-title">{title}</div>
        <div className={styles.textWrapper}>{body}</div>
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
          <source src={videoPath} type="video/webm" />
          <picture>
            <img
              className={styles.imgBanner}
              src={`/banner_programas_inovacao.jpg`}
              alt="Banner"
            />
          </picture>
        </video>
      </div>
    </div>
  );
};

export default Capa;
