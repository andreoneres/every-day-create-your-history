import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 90px;
  right: calc(5% - 40px);

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    height: 250px;
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

  @media (max-width: 700px) {
    right: calc(5% - 26px);
  }

  @media (max-width: 400px) {
    right: calc(5% - 32px);
  }
`;