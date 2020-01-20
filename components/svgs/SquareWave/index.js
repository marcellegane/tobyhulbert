import React from 'react'
import PropTypes from 'prop-types'

const SquareWave = React.forwardRef((props, ref) => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 18">
      <path
        ref={ref}
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2 16h11.997V2h16v14H46l-.003-14h16v14h16V2h16v14H106"
      />
    </svg>
  )
})

SquareWave.displayName = 'SquareWave'

SquareWave.propTypes = {
  fill: PropTypes.string,
}

SquareWave.defaultProps = {
  fill: 'currentColor',
}

export { SquareWave }
