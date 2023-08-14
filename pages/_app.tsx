import { ReactNode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import PrimaryLayout from '../src/layouts/primary/PrimaryLayout';

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
};
export default App;
