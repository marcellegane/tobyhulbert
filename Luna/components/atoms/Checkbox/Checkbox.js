import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from './Checkbox.style'

const ThisCheckbox = props => {
  const { id, name, value, checked, onChange, dataLabel } = props

  return (
    <Checkbox
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      data-label={dataLabel}
    />
  )
}

ThisCheckbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  dataLabel: PropTypes.string,
}

ThisCheckbox.defaultProps = {
  checked: false,
}

export { ThisCheckbox as Checkbox }
