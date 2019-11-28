import React from 'react'
import PropTypes from 'prop-types'

const IconPinpoint = props => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20">
      <g fill="none">
        <path
          fill={fill}
          d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
        />
        <path d="M-5-2h24v24H-5z" />
      </g>
    </svg>
  )
}

IconPinpoint.propTypes = {
  fill: PropTypes.string,
}

IconPinpoint.defaultProps = {
  fill: 'currentColor',
}

export { IconPinpoint }
