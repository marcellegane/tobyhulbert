import React from 'react'
import PropTypes from 'prop-types'

const IconCross = props => {
  const { fill } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"
      />
    </svg>
  )
}

IconCross.propTypes = {
  fill: PropTypes.string,
}

IconCross.defaultProps = {
  fill: 'currentColor',
}

export { IconCross }
