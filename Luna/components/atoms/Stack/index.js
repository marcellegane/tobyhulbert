import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from './index.style'

const ThisStack = ({ children, stackMultiplier }) => {
  return (
	<Stack stackMultiplier={stackMultiplier}>
		{ children }
	</Stack>
  )
}

ThisStack.propTypes = {
  children: PropTypes.node.isRequired,
  stackMultiplier: PropTypes.number,
}

ThisStack.defaultProps = {
  stackMultiplier: 1,
}

export { ThisStack as Stack }
