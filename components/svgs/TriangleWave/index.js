import React from 'react'
import PropTypes from 'prop-types'

const TriangleWave = React.forwardRef((props, ref) => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 18">
      <path
        ref={ref}
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2 9l8-7 16 14L42 2l16 14L74 2l8 7"
      />
    </svg>
  )
})

TriangleWave.displayName = 'TriangleWave'

TriangleWave.propTypes = {
  fill: PropTypes.string,
}

TriangleWave.defaultProps = {
  fill: 'currentColor',
}

export { TriangleWave }
