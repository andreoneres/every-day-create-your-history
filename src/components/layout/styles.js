import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(23, 23, 23, 0.98);
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 200px;
  border-left: 1px solid rgba(196, 196, 196, 0.2);
  border-right: 1px solid rgba(196, 196, 196, 0.2);

  @media (max-width: 1125px) {
    margin: 0px 90px;
  }

  @media (max-width: 550px) {
    margin: 0px 20px;
  }
`;

export { Container, Main };
