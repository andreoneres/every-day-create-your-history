import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(23, 23, 23, 0.98);
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px calc(10% - 1px);
  border-left: 1px solid rgba(196, 196, 196, 0.2);
  border-right: 1px solid rgba(196, 196, 196, 0.2);

  @media (max-width: 1113px) {
    margin: 0px calc(5% - -40px);
  }

  @media (max-width: 400px) {
    margin: 0px calc(5% - -20px);
  }
`;
