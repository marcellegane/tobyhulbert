import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup } from './ButtonGroup.style'

const ThisButtonGroup = ({ children }) => {

  return (
	<ButtonGroup>
		{children}
	</ButtonGroup>
  )
}

ThisButtonGroup.propTypes = {
    children: PropTypes.array,
}

export { ThisButtonGroup as ButtonGroup }
