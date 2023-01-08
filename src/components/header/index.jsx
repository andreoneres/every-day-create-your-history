import Menu from '@components/menu';

import * as Styled from './styles';

function Header() {
  return (
    <Styled.Container>
      <Styled.Logo>
        <Styled.LogoText>
          andre<Styled.Letter>o</Styled.Letter>neres
        </Styled.LogoText>
      </Styled.Logo>
      <Menu />
    </Styled.Container>
  );
}

export default Header;
