import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from './Checkbox'
import { CheckboxWithLabel, CheckboxLabel } from './CheckboxWithLabel.style'

const ThisCheckboxWithLabel = props => {
  const { id, value, name, handleChange, checked, label } = props

  const checkboxLabel = label || value

  return (
    <CheckboxWithLabel>
      <Checkbox
        id={id}
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <CheckboxLabel htmlFor={id} checked={checked}>
        {checkboxLabel}
      </CheckboxLabel>
    </CheckboxWithLabel>
  )
}

ThisCheckboxWithLabel.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
}

export { ThisCheckboxWithLabel as CheckboxWithLabel }
