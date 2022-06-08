import PropTypes from "prop-types";
import * as Styled from "./styles";

Button.propTypes = {
  children: PropTypes.node
}
function Button({ children }) {
  return <Styled.Button>{children}</Styled.Button>
}

export { Button };