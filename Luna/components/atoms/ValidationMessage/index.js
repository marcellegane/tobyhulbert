import React from 'react'
import PropTypes from 'prop-types'
import { ValidationMessage } from './index.style'

const ThisValidationMessage = props => {
  const { message } = props
  return (
    <ValidationMessage data-test="ValidationMessage">
      {message}
    </ValidationMessage>
  )
}

ThisValidationMessage.propTypes = {
  message: PropTypes.string,
}

export { ThisValidationMessage as ValidationMessage }
