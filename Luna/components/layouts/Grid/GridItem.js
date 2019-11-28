import React from 'react'
import PropTypes from 'prop-types'
import { GridItem } from './GridItem.style'

const ThisGridItem = ({ children, ...props }) => (
  <GridItem {...props}>{children}</GridItem>
)

ThisGridItem.propTypes = {
  children: PropTypes.node,
  gutters: PropTypes.bool,
}

ThisGridItem.defaultProps = {
  gutters: true,
}

export { ThisGridItem as GridItem }
