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

  .logo, .language {
    color: #fff;
  }

  .menu {
    max-width: 600px;
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  a:nth-child(-n+2) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 5px;
    font-size: 0.9em;
    color: #FFF;
  }

  .bar-min {
    border-bottom: 5px solid #E5484A;
    width: 30px;
  }
`;
