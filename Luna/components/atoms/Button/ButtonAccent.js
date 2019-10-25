import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ButtonAccent } from './ButtonAccent.style'

function getConditionalProps(href) {
  const conditionalProps = {}
  if (href) {
    conditionalProps.as = 'a'
    conditionalProps.href = href
  }
  return conditionalProps
}

const ThisButton = ({ children, href, ...props }) => {
  const conditionalProps = getConditionalProps(href)

  return (
	<ButtonAccent type="button" {...conditionalProps} {...props}>
		{children}
	</ButtonAccent>
  )
}

ThisButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
}

ThisButton.defaultProps = {
  disabled: false,
  selected: false,
}

const exportButton = memo(ThisButton)

export { exportButton as ButtonAccent }
