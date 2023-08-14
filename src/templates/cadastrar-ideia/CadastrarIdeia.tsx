import { useRouter } from 'next/router';
import { MutableRefObject } from 'react';
import ButtonCTA from '../../components/buttons/call-to-action/ButtonCTA';
import { jumpToRef } from '../../lib/jumpToRef';
import styles from './CadastrarIdeia.module.css';

export interface ICadastrarIdeia {
  upperSubtitle: string;
  upperButtonLabel: string;
  lowerButtonLable: string;
  upperButtonLink: string;
  listRef?: MutableRefObject<HTMLDivElement>;
}

const CadastrarIdeia: React.FC<ICadastrarIdeia> = ({
  upperSubtitle,
  upperButtonLabel,
  lowerButtonLable,
  upperButtonLink,
  listRef
}) => {
  const router = useRouter();

  const triagemSolicitacao = (): void => {
    if (listRef && listRef.current) {
      jumpToRef(listRef);
    } else {
      router.push({
        pathname: '/programas-inovacao',
        query: { verProgramas: true }
      });
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.titleSection}`}>
        <h3>
          <span>A sua ideia pode fazer</span> parte da inovação
        </h3>
      </div>

      <div className={`${styles.container__card}`}>
        <div className={`${styles.container__item}`}>
          <h4 className="text-branco">Já tem uma ideia?</h4>
          <p className="text-branco font-semibold sm:font-bold lg:mb-4">
            {upperSubtitle}
          </p>
          <div className={styles.buttonWrapper}>
            <ButtonCTA
              primary
              label={upperButtonLabel}
              size="lg"
              onClick={() => window.open(upperButtonLink, '_blank')}
            />
          </div>
        </div>

        <div className={`${styles.container__item}`}>
          <h4 className="text-branco">dúvidas sobre como inovar?</h4>
          <p className="text-branco font-semibold sm:font-bold lg:mb-4">
            Veja como é fácil clicando no link abaixo.
          </p>
          <div className={styles.buttonWrapper}>
            <ButtonCTA
              primary
              label={lowerButtonLable}
              size="lg"
              onClick={triagemSolicitacao}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastrarIdeia;
