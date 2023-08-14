import Image from 'next/image';
import Link from 'next/link';
import styles from './LogoHeader.module.css';

export interface ILogoHeader {
  isLarge: boolean;
}

const LogoHeader: React.FC<ILogoHeader> = ({ isLarge = true }) => {
  let logoSize: { width: number; height: number };
  isLarge
    ? (logoSize = {
        width: 136,
        height: 46
      })
    : (logoSize = {
        width: 80,
        height: 26
      });

  return (
    <Link href="/">
      <div
        className={`${styles.container} ${styles.logoMobileMenu} ${isLarge}`}
      >
        <Image src="/logo_header.svg" {...logoSize} alt="Logo Energisa" />
      </div>
    </Link>
  );
};

export default LogoHeader;
