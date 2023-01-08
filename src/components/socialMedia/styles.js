import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 90px;
  right: calc(5% - 39px);

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    height: 25vh;
  }

  ul > li {
    margin: 0px 20px;
  }

  svg {
    transition: .2s;
  }

  svg:hover {
    transform: scale(1.4) translateY(-3px);
  }
`;

export { Container };