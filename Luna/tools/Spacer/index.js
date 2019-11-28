import React from 'react'
import PropTypes from 'prop-types'
import { Spacer } from './index.style'

const ThisSpacer = ({ ...props }) => {
  const { spaceMultiplier } = props
  return <Spacer spaceMultiplier={spaceMultiplier} />
}

ThisSpacer.propTypes = {
  spaceMultiplier: PropTypes.number,
}

export { ThisSpacer as Spacer }
