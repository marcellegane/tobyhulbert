import React from 'react'
import PropTypes from 'prop-types'
import { LightWeight } from './index.style'

const ThisLightWeight = ({...props}) => {
    const { children } = props
  return (
	<LightWeight {...props}>
		{children}
	</LightWeight>
  )
}

ThisLightWeight.propTypes = {
  children: PropTypes.string,
  nudgeRight: PropTypes.bool,
}


export { ThisLightWeight as LightWeight }
