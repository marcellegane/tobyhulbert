import React from 'react'
import PropTypes from 'prop-types'

const SineWave = React.forwardRef((props, ref) => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 18">
      <path
        ref={ref}
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeWidth="3"
        d="M2.003 2C4.88 2 7.321 4.432 10 9c2.707 4.568 5.151 7 8 7s5.297-2.432 8.003-7c2.71-4.568 5.151-7 7.997-7s5.29 2.432 8 7c2.679 4.568 5.126 7 8.003 7S55.321 13.568 58 9c2.704-4.568 5.149-7 8-7s5.296 2.432 8 7c2.708 4.568 5.152 7 8 7s5.292-2.432 8-7c2.526-4.692 5.193-7.025 8-7"
      />
    </svg>
  )
})

SineWave.displayName = 'SineWave'

SineWave.propTypes = {
  fill: PropTypes.string,
}

SineWave.defaultProps = {
  fill: 'currentColor',
}

export { SineWave }
