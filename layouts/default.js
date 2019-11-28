import React from 'react'
import PropTypes from 'prop-types'
import DocHead from '../components/snippets/DocHead'
import { GlobalStyle, MainContent } from './default.style'

const DefaultLayout = props => {
  const { children } = props
  return (
    <React.Fragment>
      <DocHead />
      <GlobalStyle />
      <MainContent>{children}</MainContent>
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
