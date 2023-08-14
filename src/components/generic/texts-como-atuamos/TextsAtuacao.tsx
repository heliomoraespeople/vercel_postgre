import { useRouter } from 'next/router';
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './TextsAtuacao.module.css';

interface TextsAtuacaoData {
  title: string;
  children: JSX.Element;
  buttonLink: string;
  linkPath: string;
  linkPlaceholder?: string;
}

const TextsAtuacao: React.FC<TextsAtuacaoData> = ({
  title,
  children,
  buttonLink,
  linkPath,
  linkPlaceholder
}) => {
  const router = useRouter();
  return (
    <div className={styles.TextsAtuacao}>
      <h4 className={`${styles.title} text-branco`}>{title}</h4>
      {children}
      {linkPlaceholder ? (
        <span className="text-[12px] text-branco font-bold">
          {linkPlaceholder}
        </span>
      ) : (
        <ButtonLink
          className={styles.btnLink}
          label={buttonLink}
          onClick={() => router.push(linkPath)}
        />
      )}
    </div>
  );
};

export default TextsAtuacao;
