import React from 'react'
import PropTypes from 'prop-types'
import { IconStyle } from './Icon.style'
import { IconCross } from '../../../svgs/icons/IconCross'

const ThisIcon = ({ iconName, ...props }) => {
  switch (iconName) {
    case 'cross':
      return (
	<IconStyle {...props}>
		<IconCross role="presentation" />
	</IconStyle>
      )
    default:
      return (
	<IconStyle {...props}>
		<IconCross role="presentation" />
	</IconStyle>
      )
  }
}

ThisIcon.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
  before: PropTypes.bool,
}

ThisIcon.defaultProps = {
  iconName: 'cross',
  color: 'white',
  before: true,
}

export { ThisIcon as Icon }
