import styled from 'styled-components';

const Container = styled.section`
  padding: 50px 60px;
  max-width: 1000px;
  width: 100%;

  .cv-button {
    margin-top: 30px;
  }

  .cv-button svg {
    position: relative;
    top: 1.9px;
  }

  @media (max-width: 400px) {
    padding: 40px 30px;
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
    color: #e5484a;
    margin-left: 20px;
  }

  .name {
    padding: 20px 0px;
    margin-left: 25px;
    color: #fff;
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
    color: #fff;
  }

  .image {
    border-radius: 19px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .image {
      margin-top: 30px !important;
      border-radius: 19px;
      min-width: 220px !important;
      min-height: 220px !important;
    }
  }

  @media (max-width: 480px) {
    .name {
      padding: 20px 0px;
      margin-left: 20px;
      color: #fff;
    }
  }
`;

export { Container, InfosContainer };
