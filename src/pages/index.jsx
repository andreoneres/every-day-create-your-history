import { Header } from '../components/header';
import * as Styled from '../components/layout/styles';
import Head from 'next/head';
import Sections from '../components/sections';

function Index() {
  return (
    <>
      <Head>
        <title>André Oliveira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styled.Container>
          <Header />
          <Sections />
      </Styled.Container>
    </>
  );
}

export default Index;
