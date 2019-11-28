import React from 'react'
import PropTypes from 'prop-types'
import {
  RadioGroup,
  RadioGroupOption,
  RadioGroupInput,
  RadioGroupLabel,
} from './index.style'

const ThisRadioGroup = props => {
  const { options, name, handleChange, checkedValue } = props

  return (
    <RadioGroup>
      {options.map((option, i) => {
        const id = name + option.value
        return (
          <RadioGroupOption key={i}>
            <RadioGroupInput
              type="radio"
              checked={checkedValue === option.value}
              id={id}
              name={name}
              value={option.value}
              onChange={handleChange}
            />
            <RadioGroupLabel htmlFor={id}>{option.label}</RadioGroupLabel>
          </RadioGroupOption>
        )
      })}
    </RadioGroup>
  )
}

ThisRadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { ThisRadioGroup as RadioGroup }
