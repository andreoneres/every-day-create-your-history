import Head from 'next/head';
import Home from '@components/home';
import Layout from '@components/layout';

function Index() {
  return (
    <>
      <Head>
        <title>André Oliveira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Index;
