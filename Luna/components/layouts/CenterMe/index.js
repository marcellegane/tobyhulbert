import React from 'react'
import PropTypes from 'prop-types'
import { CenterMe } from './index.style'

const ThisCenterMe = ({...props}) => {
    const { children } = props
  return (
	<CenterMe>
		{children}
	</CenterMe>
  )
}

ThisCenterMe.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, PropTypes.string ]),
}

export { ThisCenterMe as CenterMe }
