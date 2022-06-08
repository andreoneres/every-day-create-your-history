import styled from "styled-components";

const Container = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
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