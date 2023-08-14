import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../templates/footer/Footer';
import Header from '../../templates/header/Header';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Energisa Inovação</title>
        <meta name="description" content="Portal de inovação da Energisa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
