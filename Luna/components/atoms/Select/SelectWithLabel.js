import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Select } from './Select'
import { LabelStyle } from '../Label/index.style'

const ThisSelectWithLabel = ({ ...props }) => {
  const { label, valid } = props

  return (
    <React.Fragment>
      <LabelStyle valid={valid}>{label}</LabelStyle>
      <Select valid={valid} {...props} />
    </React.Fragment>
  )
}

ThisSelectWithLabel.propTypes = {
  label: PropTypes.string,
  valid: PropTypes.bool,
}

ThisSelectWithLabel.defaultProps = {
  valid: true,
}

const exportSelectWithLabel = memo(ThisSelectWithLabel)

export { exportSelectWithLabel as SelectWithLabel }
