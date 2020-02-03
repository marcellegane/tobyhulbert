import PropTypes from 'prop-types'
import { TextMask, TextMaskContent } from './index.style'

const ThisTextMask = ({ show, children }) => (
  <TextMask>
    <TextMaskContent show={show}>{children}</TextMaskContent>
  </TextMask>
)

ThisTextMask.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
}

export { ThisTextMask as TextMask }
