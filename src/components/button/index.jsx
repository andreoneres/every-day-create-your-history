import PropTypes from "prop-types";
import { ButtonStyled } from "./styles";

Button.propTypes = {
  children: PropTypes.node
}
function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}

export { Button };