import styled from 'styled-components';

export const Container = styled.div`
  max-width: 37.5rem;
  width: 100%;

  @media (max-width: 730px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  a {
    cursor: pointer;
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
`;
