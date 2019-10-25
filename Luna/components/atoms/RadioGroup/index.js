import React from 'react'
import PropTypes from 'prop-types'
import {
  RadioGroup,
  RadioGroupOption,
  RadioGroupInput,
  RadioGroupLabel,
} from './index.style'

const ThisRadioGroup = props => {
  const { options, name, handleRadioGroupChange, checkedOption } = props

  return (
    <RadioGroup>
      {options.map(option => (
        <RadioGroupOption key={option.name}>
          <RadioGroupInput
            type="radio"
            checked={checkedOption === option.name}
            id={option.name}
            name={name}
            value={option.name}
            onChange={handleRadioGroupChange}
          />
          <RadioGroupLabel htmlFor={option.name}>{option.name}</RadioGroupLabel>
        </RadioGroupOption>
      ))}
    </RadioGroup>
  )
}

ThisRadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleRadioGroupChange: PropTypes.func.isRequired,
  checkedOption: PropTypes.string,
}

export { ThisRadioGroup as RadioGroup }
