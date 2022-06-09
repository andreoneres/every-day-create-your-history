import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
  }

  a:nth-child(-n + 2) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 5px;
    font-size: 0.9em;
    color: #fff;
  }

  .bar-min {
    border-bottom: 5px solid #e5484a;
    width: 30px;
  }
`;

export { Container };
