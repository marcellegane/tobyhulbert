import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from './Checkbox.style'

const ThisCheckbox = props => {
  const { id, name, value, checked, onChange } = props

  return (
    <Checkbox
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  )
}

ThisCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

ThisCheckbox.defaultProps = {
  checked: false,
}

export { ThisCheckbox as Checkbox }
