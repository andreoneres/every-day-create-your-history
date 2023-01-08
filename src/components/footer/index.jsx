import * as Styled from './styles';

function Footer() {
  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <Styled.Container>
      <Styled.Footer>
        <Styled.FooterText>Copyright © {currentYear} - André Oliveira</Styled.FooterText>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Footer;
