import React from 'react'
import PropTypes from 'prop-types'
import { SuccessMessage } from './index.style'

const ThisSuccessMessage = props => {
  const { message } = props
  return <SuccessMessage data-test="SuccessMessage">{message}</SuccessMessage>
}

ThisSuccessMessage.propTypes = {
  message: PropTypes.string,
}

export { ThisSuccessMessage as SuccessMessage }
