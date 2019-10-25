import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from './Checkbox'
import { CheckboxWithLabel, CheckboxLabel } from './CheckboxWithLabel.style'

const ThisCheckboxWithLabel = props => {
  const { id, value, name, handleChange, checked } = props

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
        {value}
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
}

export { ThisCheckboxWithLabel as CheckboxWithLabel }
