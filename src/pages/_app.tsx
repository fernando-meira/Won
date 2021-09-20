import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '~/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Next.js</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, Next.js and Styled Components"
        />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default App;
