import React from 'react'
import PropTypes from 'prop-types'
import { ButtonTextBase } from './index.style'

const ThisButtonText = ({ children, ...props }) => {

  return (
	<ButtonTextBase type="button" {...props}>
		{children}
	</ButtonTextBase>
  )
}

ThisButtonText.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  }


export { ThisButtonText as ButtonText }
