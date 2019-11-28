import React from 'react'
import PropTypes from 'prop-types'
import { FormTitle } from './index.style'

const ThisFormTitle = (props) => {
    const { title } = props
  return <FormTitle {...props}>{title}</FormTitle>
}

ThisFormTitle.propTypes = {
    title: PropTypes.string,
}


export { ThisFormTitle as FormTitle }
