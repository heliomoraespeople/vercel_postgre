import { ReactNode, useCallback } from 'react';
import generateBreadCrumbText from '../../../lib/generateBreadcrumbText';
import BreadCrumbBase from '../../breadcrumbs/breadcrumb-base/BreadCrumbBase';
import CardSolido from '../../cards/card-solido/CardSolido';
import styles from './CapaSubprogramas.module.css';

export interface ICapaSubprogramas {
  imageSrcCapa: string;
  title: ReactNode;
  bodyCapa: ReactNode;
  textInfo: ReactNode;
}

const CapaSubprogramas: React.FC<ICapaSubprogramas> = ({
  imageSrcCapa,
  title,
  bodyCapa,
  textInfo
}) => {
  const getDefaultTextGenerator = useCallback(generateBreadCrumbText, []);

  return (
    <div className={`${styles.container} text-branco`}>
      <div className={styles.sectionTop}>
        <div className={`${styles.sectionLeft}`}>
          <BreadCrumbBase getDefaultTextGenerator={getDefaultTextGenerator} />
          <div className="capa-title">{title}</div>
          <div className={styles.textWrapper}>{bodyCapa}</div>
        </div>
        <div className={styles.sectionRight}>
          <picture>
            <img className={styles.imgBanner} src={imageSrcCapa} alt="Banner" />
          </picture>
        </div>
      </div>
      <div className={styles.sectionBottom}>
        <picture className="hidden xl:block">
          <img alt="" src="/programas_funciona.jpg" />
        </picture>
        <div className={styles.info}>
          {textInfo}
          <CardSolido
            linkPlaceholder="Veja mais informações abaixo."
            className={styles.cardWrapper}
            mode="dark"
            text={
              <>
                <h6 className="font-bold">Gostou deste tipo de projeto?</h6>
                {/* <span>
                  Veja a descrição completa fazendo o download abaixo.
                </span> */}
              </>
            }
            buttonLabel="Conhecer mais este projeto"
            onClickButton={() => console.log('click')}
          />
        </div>
      </div>
    </div>
  );
};

export default CapaSubprogramas;
