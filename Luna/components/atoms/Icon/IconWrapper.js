import PropTypes from 'prop-types'
import { IconWrapper } from './IconWrapper.style'

const ThisIconWrapper = ({ children, ...props }) => (
  <IconWrapper {...props}>{children}</IconWrapper>
)

ThisIconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

ThisIconWrapper.defaultProps = {
  width: 24,
  height: 24,
}

export { ThisIconWrapper as IconWrapper }
