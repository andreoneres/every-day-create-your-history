import styled from "styled-components";

const Container = styled.section`
  padding: 80px 60px;

  .cv-button {
    margin-top: 30px;
  }

  .cv-button svg {
    position: relative;
    top: 1.9px;
  }
`;

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .infos div {
    display: flex;
    align-items: center;
  }

  .hello span {
    color: #E5484A;
    margin-left: 20px;
  }

  .name {
    padding: 20px 0px;
    margin-left: 25px;
    color: #FFF;
  }

  .name h2 {
    font-weight: 100;
    font-size: 2.4rem;
    margin-left: 20px;
  }

  .name span {
    font-size: 2.4rem;
    font-weight: bold;
  }

  .calling {
    color: #FFF;
  }

  .image {
    border-radius: 19px;
  }
`;

export { Container, InfosContainer };