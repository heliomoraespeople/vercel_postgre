import { FC } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import Person from '../../icons/person-icon/Person';
import styles from './PapeisResponsabilidades.module.css';

export interface IPapeisResponsabilidades {
  firstCardTitle: string;
  firstCardText: string;
  secondCardTitle: string;
  secondCardText: string;
  subTitle: string;
}

const PapeisResponsabilidades: FC<IPapeisResponsabilidades> = ({
  firstCardTitle,
  firstCardText,
  secondCardTitle,
  secondCardText,
  subTitle
}) => {
  const windowSize = useWindowSize();

  return (
    <div className={`${styles.containerResponsabilidades}`}>
      <>
        {windowSize.width < Breakpoints.md && (
          <div className={styles.topResponsabilidades}>
            <h3 className={`${styles.titleResponsabilidades} uppercase`}>
              Papéis e <br /> <p className="font-bold">Responsabilidades</p>
            </h3>
            <p className={`${styles.textResponsabilidades} mt-5`}>{subTitle}</p>
          </div>
        )}
      </>

      <div className={styles.wrapperResponsabilidades}>
        <div className={styles.top} />
        <div className={styles.middle} />
        <div className={styles.bottom} />

        <div className={styles.cardsContainer}>
          <>
            {windowSize.width > Breakpoints.md && (
              <div className={styles.topResponsabilidades}>
                <h3 className={`${styles.titleResponsabilidades} uppercase`}>
                  Papéis e <br /> <p className="font-bold">Responsabilidades</p>
                </h3>
                <p className={`${styles.textResponsabilidades} mt-5`}>
                  {subTitle}
                </p>
              </div>
            )}
          </>

          <div className={styles.firstCard}>
            <Person width={65} height={65} />
            <h4 className={`${styles.title} uppercase`}>{firstCardTitle}</h4>
            <p className={styles.textContent}>{firstCardText}</p>
          </div>

          <div className={styles.secondCard}>
            <Person width={65} height={65} />

            <h4 className={`${styles.title} uppercase`}>{secondCardTitle}</h4>
            <p className={styles.textContent}>{secondCardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapeisResponsabilidades;
