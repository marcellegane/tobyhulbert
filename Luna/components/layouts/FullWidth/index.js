import React from 'react'
import PropTypes from 'prop-types'
import { FullWidthContainer } from './index.style'

const ThisFullWidth = ({ children }) => (
  <FullWidthContainer>{children}</FullWidthContainer>
)

ThisFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThisFullWidth as FullWidth }
