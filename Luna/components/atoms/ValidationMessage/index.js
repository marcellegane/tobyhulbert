import React from 'react'
import PropTypes from 'prop-types'
import { ValidationMessage } from './index.style'

const ThisValidationMessage = props => {
  const { message, dataTest } = props
  return (
    <ValidationMessage data-test={dataTest || 'ValidationMessage'}>
      {message}
    </ValidationMessage>
  )
}

ThisValidationMessage.propTypes = {
  message: PropTypes.string,
  dataTest: PropTypes.string,
}

export { ThisValidationMessage as ValidationMessage }
