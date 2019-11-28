import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextAreaStyle } from './TextArea.style'
import { LabelStyle } from '../Label/index.style'

const ThisTextAreaWithLabel = ({ ...props }) => {
  const { label, name, type, value, valid, disabled } = props

  return (
	<React.Fragment>
		<LabelStyle valid={valid} disabled={disabled}>
			{label}
		</LabelStyle>
		<TextAreaStyle
			type={type}
			name={name}
			value={value}
			valid={valid}
			disabled={disabled}
			{...props}
		/>
	</React.Fragment>
  )
}

ThisTextAreaWithLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
}

ThisTextAreaWithLabel.defaultProps = {
  valid: true,
  disabled: false,
}

const exportTextAreaWithLabel = memo(ThisTextAreaWithLabel)

export { exportTextAreaWithLabel as TextAreaWithLabel }
