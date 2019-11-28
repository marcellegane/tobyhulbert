import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBrand } from './ButtonBrand.style'

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
	<ButtonBrand type="button" {...conditionalProps} {...props}>
		{children}
	</ButtonBrand>
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

export { ThisButton as ButtonBrand }
