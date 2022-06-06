import { useLanguageContext } from '../contexts/language';
import { Header } from '../components/header';
import { Home } from '../components/home';
import { Container, Main } from '../components/layout/styles';

function Index() {
  const context = useLanguageContext();
  console.log(context);

  return (
    <Container>
      <Header />
      <Main>
        <Home />
      </Main>
    </Container>
  );
}

export default Index;
