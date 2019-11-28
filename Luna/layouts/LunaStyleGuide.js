import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle, MainContent } from './LunaStyleGuide.style'

const LunaStyleGuide = props => {
  const { children } = props
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainContent>{children}</MainContent>
    </React.Fragment>
  )
}

LunaStyleGuide.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LunaStyleGuide
