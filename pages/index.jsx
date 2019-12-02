import React from 'react'
import PropTypes from 'prop-types'
import {
  GlobalStyle,
  MainContent,
} from '../Luna/components/layouts/default.style'
import { ContentWrapper } from '../Luna'
import { Spacer } from '../Luna/tools/Spacer/index.style'

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <MainContent>
      <Spacer></Spacer>
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
