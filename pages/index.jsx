import React from 'react'
import PropTypes from 'prop-types'
import {
  GlobalStyle,
  MainContent,
} from '../Luna/components/layouts/default.style'
import { ContentWrapper } from '../Luna'

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <MainContent>
      <ContentWrapper>
        <h1>Hello World!</h1>
      </ContentWrapper>
    </MainContent>
  </React.Fragment>
)

Index.propTypes = {
  children: PropTypes.node,
}

export default Index
