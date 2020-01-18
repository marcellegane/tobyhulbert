import React from 'react'
import PropTypes from 'prop-types'

const SquareWave = props => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="304" height="18">
      <g fill={fill} fillRule="nonzero">
        <path d="M133.337 4v13.704h19.666V4h13.667v13.704h19.667V4h13.666v13.704h19.667v-3h-16.667V1h-19.666v13.704H169.67V1h-19.667v13.704h-13.666V1H116.67v16.704h3V4z" />
        <path d="M233.337 4v13.704h19.666V4h13.667v13.704h19.667V4h13.666v13.704h3V1h-19.666v13.704H269.67V1h-19.667v13.704h-13.666V1H216.67v16.704h3V4zM19.67 4h13.667v13.704h19.666V4H66.67v13.704h19.667V4h13.666v13.704h19.667v-3h-16.667V1H83.337v13.704H69.67V1H50.003v13.704H36.337V1H16.67v13.704H0v3h19.67z" />
      </g>
    </svg>
  )
}

SquareWave.propTypes = {
  fill: PropTypes.string,
}

SquareWave.defaultProps = {
  fill: 'currentColor',
}

export { SquareWave }
