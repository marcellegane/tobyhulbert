import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input.style'

const ThisInput = React.forwardRef(({ ...props }, ref) => {
  const { type, name, value, dataTest, valid, disabled } = props

  return (
    <Input
      ref={ref}
      type={type}
      name={name}
      value={value}
      data-test={dataTest}
      valid={valid}
      disabled={disabled}
      {...props}
    />
  )
})

ThisInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  dataTest: PropTypes.string,
  centerText: PropTypes.bool,
  valid: PropTypes.bool,
  showPin: PropTypes.bool,
}

ThisInput.defaultProps = {
  disabled: false,
  readonly: false,
  centerText: false,
  showPin: false,
  valid: true,
}

ThisInput.displayName = 'Luna Input'

export { ThisInput as Input }
