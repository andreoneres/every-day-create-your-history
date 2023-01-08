import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171717;
  max-height: 80px;
  height: 80px;
  font-size: 1em;
  padding: 0px 40px;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);

  @media (max-width: 630px) {
    height: 60px;
    padding: 0px 10px;
  }
`;

export const Logo = styled.div`
  color: #fff;
`;

export const LogoText = styled.div`
  color: #fff;
  font-size: 1.9em;
`;

export const Letter = styled.span`
  color: #E5484A;
`;
