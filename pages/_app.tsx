import { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import { FC } from 'react';
import { globalStyles } from '@/stitches.config';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import Head from 'next/head';
import '../styles/global.css';
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
              rel="stylesheet"
            />
          </Head>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
