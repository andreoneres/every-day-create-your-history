import styled from 'styled-components';

const Container = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);

  .cv-button {
    margin-top: 1.875rem;
  }

  .cv-button svg {
    position: relative;
    top: 1.9px;
  }
`;

const Subcontainer = styled.div`
  margin: 0px 130px;
  padding: 40px 95px;
  border-left: 1px solid rgba(196, 196, 196, 0.2);
  border-right: 1px solid rgba(196, 196, 196, 0.2);

  @media (max-width: 980px) {
    margin: 0px 90px;
    padding: 40px 65px;
  }

  @media (max-width: 660px) {
    margin: 0px 30px;
    padding: 30px 65px;
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
      min-width: 13.75rem !important;
      min-height: 13.75rem !important;
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

export { Container, InfosContainer, Subcontainer };
