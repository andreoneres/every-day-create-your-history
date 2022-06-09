import { useLanguageContext } from '../contexts/language';
import { Header } from '../components/header';
import { Home } from '../components/home';
import { Container, Main } from '../components/layout/styles';
import Head from 'next/head';

function Index() {
  const context = useLanguageContext();

  return (
    <>
      <Head>
        <title>André Oliveira</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Header />
        <Main>
          <Home />
        </Main>
      </Container>
    </>
  );
}

export default Index;
