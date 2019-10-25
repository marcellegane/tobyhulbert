import React from 'react'
import PropTypes from 'prop-types'
import { LabelStyle } from './index.style'

const ThisLabel = (props, { ...children }) => (
  <LabelStyle {...props}>{children}</LabelStyle>
)

ThisLabel.propTypes = {
  center: PropTypes.bool,
}

ThisLabel.defaultProps = {
  center: false,
}

export { ThisLabel as Label }
