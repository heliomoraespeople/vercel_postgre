import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import menuItems, { IMenuItem } from '../../lib/menuItems';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.top} text-branco`}>
        <div className={`${styles.wrapper}`}>
          <div className={styles.logo}>
            <Image
              src="/logo_footer.svg"
              alt="Energisa Inovação"
              width={194}
              height={84}
            />
          </div>
          <div className={`${styles.menuItens}`}>
            {menuItems.map((menuItem: IMenuItem, index: number) => (
              <Link href={menuItem.href} key={index}>
                {menuItem.label}
              </Link>
            ))}
          </div>

          <div className={styles.redes}>
            <div className="flex-col">
              <p className={styles.redesTitle}>Contato</p>
              <p>siteinovacao@energisa.com.br</p>
            </div>

            <p className={styles.redesTitle}>Redes Sociais</p>
            <div>
              <a
                href="https://www.linkedin.com/company/energisa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/icon_in.svg"
                  alt="LinkedIn"
                  width={23.71}
                  height={23.71}
                />
              </a>
              <a
                href="https://www.instagram.com/energisa/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Image
                  src="/icon_ig.svg"
                  alt="Instagram"
                  width={29.19}
                  height={23.71}
                />
              </a>

              <a
                href="https://www.tiktok.com/@energisa"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <Image
                  src="/icon_tt.svg"
                  alt="Tiktok"
                  width={30.79}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bottom} text-cinza-200`}>
      Copyright © 2023 Energisa. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
