import { useRouter } from 'next/router';

import { useLanguageContext } from '../contexts/language';
import { Header } from '../components/header';
import { Presentation } from '../components/presentation';

function Home() {
  const { locale, locales, asPath } = useRouter();

  const context = useLanguageContext();
  console.log(context);

  return (
    <>
      <Header />
      <Presentation />
    </>
  );
}

export default Home;
