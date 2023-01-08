import PropTypes from 'prop-types';

import * as Styled from "./styles";

Border.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string
}
function Border({ height, width, color = "#E5484A" }) {
  return <Styled.Border height={height} width={width} color={color}/>
}

export default Border;