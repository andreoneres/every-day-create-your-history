import PropTypes from "prop-types";

import * as Styled from "./styles";

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}
function Button({ children, onClick }) {
  return <Styled.Button onClick={onClick} >{children}</Styled.Button>
}

export { Button };