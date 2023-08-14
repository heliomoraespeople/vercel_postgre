import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import CardCases, { ICardCases } from '../../cards/card-cases/CardCases';
import CarouselBase from '../../carousels/carousel-base/CarouselBase';
import styles from './CasesSucesso.module.css';

interface ICasesSucessoArray {
  cases: ICardCases[];
}

const CasesSucesso: React.FC<ICasesSucessoArray> = ({ cases }) => {
  const windowSize = useWindowSize();
  const threshold = Breakpoints.xl;
  return (
    <div className={styles.container}>
      <div className={`${styles.title} bg-azulEscuro text-branco`}>
        <h3>
          <span className="font-light">CASES DE </span>
          SUCESSO
        </h3>
      </div>
      <div className={styles.content}>
        <CarouselBase
          customArrows={windowSize.width <= threshold}
          arrowSize="md"
          arrows={windowSize.width >= threshold}
          dotsClass="slick-dots slick-dots--digilabs"
        >
          {cases.map((item, index) => {
            return <CardCases key={index} {...item} />;
          })}
        </CarouselBase>
      </div>
    </div>
  );
};

export default CasesSucesso;
