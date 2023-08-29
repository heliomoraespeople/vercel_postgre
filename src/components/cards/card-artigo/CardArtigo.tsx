import styles from './CardArtigo.module.css';
import ButtonLink from '../../buttons/link/ButtonLink';
import Priorities from '../../../models/enums/CardPriorities';
import TextTruncate from '../../textTruncate/text-truncate';

export interface ICardArtigo {
  image: string;
  abstract: string;
  title: string;
  priority: Priorities.high | Priorities.mid | Priorities.low;
  link: string;
}

const CardArtigo: React.FC<ICardArtigo> = ({
  image,
  abstract,
  title,
  priority,
  link
}) => {
  const handleButtonClick = (): void => {
    window.open(link, '_blank');
  };

  return (
    <div className={[styles.container, styles[priority]].join(' ')}>
      <div className={styles.background}>
        <picture>
          <source srcSet={image} type="image/jpg" />
          <img alt={title} src={image} />
        </picture>
      </div>
      <div className={styles.textWrapper}>
        <h5 className="mb-3">{title}</h5>
        <TextTruncate text={abstract} limit={115} />
        <ButtonLink
          className="mt-5 md:mt-5.5"
          label="Ver mais"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default CardArtigo;
