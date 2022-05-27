import styled from "styled-components";

const BorderStyled = styled.div`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  background-color: ${(props) => (props.color)};
`;

export { BorderStyled };