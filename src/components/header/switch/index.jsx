import { Container } from './styles';
import { useRouter } from 'next/router';
import { OptionLanguage } from './options';

function SwitchLanguage() {
  const { locale, locales, asPath } = useRouter();
  return (
    <Container>
      <ul>
        {locales.map((l, i) => {
          return (
            <OptionLanguage key={i} language={l} />
          );
        })}
      </ul>
    </Container>
  );
}

export { SwitchLanguage };
