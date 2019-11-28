import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import { LabelStyle } from '../Label/index.style'

const ThisInputWithLabel = ({ ...props }) => {
  const { label, name, type, value, centerLabel, dataTest, valid, id } = props

  return (
    <React.Fragment>
      <LabelStyle center={centerLabel} valid={valid} htmlFor={label}>
        {label}
      </LabelStyle>
      <Input
        type={type}
        name={name}
        value={value}
        data-test={dataTest}
        valid={valid}
        id={id}
        {...props}
      />
    </React.Fragment>
  )
}

ThisInputWithLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  centerLabel: PropTypes.bool,
  dataTest: PropTypes.string,
  valid: PropTypes.bool,
  id: PropTypes.string,
}

ThisInputWithLabel.defaultProps = {
  centerLabel: false,
  valid: true,
}

const exportInputWithLabel = memo(ThisInputWithLabel)

export { exportInputWithLabel as InputWithLabel }
