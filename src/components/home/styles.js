import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  padding: 60px;

  @media (max-width: 1380px) {
    padding: 0px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 35%;

  @media (max-width: 1113px) {
    height: 40vh;
    margin-bottom: 20px;
  }

  @media (max-width: 666px) {
    height: 43vh;
    margin-bottom: 30px;
  }
`;

export const Hello = styled.div`
  display: flex;
  align-items: center;
`;

export const HelloText = styled.h4`
  margin-left: 30px;
  color: #fff;
  font-weight: 100;
  font-size: 1.3rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 42px;

  @media (max-width: 1300px) {
    margin-left: 0px;
  }
`;

export const TitleText = styled.h1`
  margin-left: 40px;
  color: #fff;
  font-size: 2.7rem;

  @media (max-width: 460px) {
    font-size: 2.2rem;
  }
`;

export const TitleLight = styled.span`
  display: inline-block;
  font-weight: 100;
`;

export const Calling = styled.div``;

export const CallingText = styled.h3`
  font-weight: 100;
  color: #fff;
  font-size: 1.3rem;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
  }

  @media (max-width: 666px) {
    svg {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 460px) {
    svg {
      width: 250px;
      height: 250px;
    }
  }
`;