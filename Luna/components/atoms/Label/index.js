import React from 'react'
import PropTypes from 'prop-types'
import { LabelStyle } from './index.style'

const ThisLabel = ({ children, ...props }) => (
  <LabelStyle {...props}>{children}</LabelStyle>
)

const HiddenFormLabel = ({ children, ...props }) => {
  const { forField } = props
  return (
    <LabelStyle htmlFor={forField} hideThis>
      {children}
    </LabelStyle>
  )
}

ThisLabel.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
}

ThisLabel.defaultProps = {
  center: false,
}

HiddenFormLabel.propTypes = {
  forField: PropTypes.string,
  children: PropTypes.node,
}

export { ThisLabel as Label, HiddenFormLabel }
