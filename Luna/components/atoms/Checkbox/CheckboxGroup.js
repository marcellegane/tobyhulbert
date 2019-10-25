import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '../Stack'
import {
  CheckboxGroup,
  CheckboxGroupHeader,
  CheckboxGroupLabel,
  CheckboxGroupClose,
  CheckboxGroupMain,
} from './CheckboxGroup.style'
import { CheckboxWithLabel } from './CheckboxWithLabel'

const ThisCheckboxGroup = props => {
  const {
    label,
    options,
    name,
    handleChange,
    checkedOptions,
    isOpen,
    toggleVisibility,
  } = props

  return (
    <CheckboxGroup isOpen={isOpen}>
      <CheckboxGroupHeader>
        <CheckboxGroupLabel>{label}</CheckboxGroupLabel>
        <CheckboxGroupClose type="button" onClick={toggleVisibility}>
          Close
        </CheckboxGroupClose>
      </CheckboxGroupHeader>

      <CheckboxGroupMain>
        <Stack>
          {options.map(option => (
            <CheckboxWithLabel
              key={option.name}
              id={option.id}
              value={option.name}
              name={name}
              checked={checkedOptions.indexOf(option.name) > -1}
              handleChange={handleChange}
            />
          ))}
        </Stack>
      </CheckboxGroupMain>
    </CheckboxGroup>
  )
}

ThisCheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  checkedOptions: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
}

export { ThisCheckboxGroup as CheckboxGroup }
