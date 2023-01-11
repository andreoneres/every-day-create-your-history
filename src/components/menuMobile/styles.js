import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 730px) {
    display: flex;
  }
`;

export const MenuButton = styled.div`
  z-index: 10;
  cursor: pointer;
`;

export const MenuButtonLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.4s;
  border-radius: 5px;
`;

export const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

export const MenuList = styled.ul`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 10px;
  height: 100vh;
  width: 200px;
  background-color: #000000;
  animation: menuAnimationOpen 1s;
  z-index: 9;

  li {
    margin: 20px 0;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  li a span {
    margin-left: 10px;
  }

  @keyframes menuAnimationOpen {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
