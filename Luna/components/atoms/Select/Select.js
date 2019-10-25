import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Select, Option } from './Select.style'

function renderSelectOptions(options) {
  return options.map(option => (
    <option key={option.value} value={option.value} disabled={option.disabled}>
      {option.label}
    </option>
  ))
}

function renderDefaultOption(defaultText) {
  return <Option value={defaultText}>{defaultText}</Option>
}

const ThisSelect = React.forwardRef(({ ...props }, ref) => {
  const {
    name,
    value,
    disabled,
    readonly,
    onChange,
    onBlur,
    options,
    defaultText,
    dataTest,
    valid,
  } = props

  const renderOptions = renderSelectOptions(options)
  const showPleaseSelect = defaultText ? renderDefaultOption(defaultText) : null

  return (
    <Select
      value={value}
      name={name}
      disabled={disabled}
      readonly={readonly}
      onChange={onChange}
      onBlur={onBlur}
      data-test={dataTest}
      valid={valid}
      ref={ref}
    >
      {showPleaseSelect}
      {renderOptions}
    </Select>
  )
})

ThisSelect.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  defaultText: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  dataTest: PropTypes.string,
  valid: PropTypes.bool,
}

ThisSelect.defaultProps = {
  valid: true,
  disabled: false,
  readonly: false,
}

ThisSelect.displayName = 'Luna Select'

const exportSelect = memo(ThisSelect)

export { exportSelect as Select }
