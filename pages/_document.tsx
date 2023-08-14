import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ReactElement } from 'react';
import Favicon from '../src/components/icons/favicon/Favicon';

const MyDocument = (): ReactElement => {
  return (
    <Html lang="pt-BR">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GRE7BPE6DY"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GRE7BPE6DY');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GRE7BPE6DY"
        ></Script>
        <Script id="google-analytics">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-GRE7BPE6DY');
         `}
        </Script>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
