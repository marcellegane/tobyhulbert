import React from 'react'
import PropTypes from 'prop-types'
import { Separator } from './index.style'
import { Luna } from '../../../config'

const ThisSeparator = ({ bgColor }) => <Separator bgColor={bgColor} />

ThisSeparator.propTypes = {
  bgColor: PropTypes.string,
}

ThisSeparator.defaultProps = {
  bgColor: Luna.color.grey.light,
}

export { ThisSeparator as Separator }
