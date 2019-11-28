import React from 'react'
import PropTypes from 'prop-types'
import { Grid, GridMain } from './Grid.style'

const ThisGrid = ({ ...props }) => {
  const { children } = props
  return (
    <Grid {...props}>
      <GridMain {...props}>{children}</GridMain>
    </Grid>
  )
}

ThisGrid.propTypes = {
  children: PropTypes.node.isRequired,
  overflow: PropTypes.string,
  gutters: PropTypes.bool,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
}

ThisGrid.defaultProps = {
  overflow: 'hidden',
  gutters: true,
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
}

export { ThisGrid as Grid }
