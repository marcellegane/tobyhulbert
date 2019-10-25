import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextAreaStyle } from './TextArea.style'

const ThisTextArea = ({ ...props }) => <TextAreaStyle type="text" {...props} />

ThisTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  valid: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

ThisTextArea.defaultProps = {
  disabled: false,
  readonly: false,
  valid: true,
}

const exportTextArea = memo(ThisTextArea)

export { exportTextArea as TextArea }
