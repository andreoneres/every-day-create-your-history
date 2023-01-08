import { useRouter } from 'next/router';
import { OptionLanguage } from '../optionsLanguages';
import * as Styled from './styles';

function SwitchLanguage() {
  const { locale, locales, asPath } = useRouter();
  return (
    <Styled.Container>
      <ul>
        {locales.map((l, i) => {
          return (
            <OptionLanguage key={i} language={l} />
          );
        })}
      </ul>
    </Styled.Container>
  );
}

export { SwitchLanguage };
