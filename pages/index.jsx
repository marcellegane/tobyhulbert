import React from 'react'
import {
  GlobalStyle,
  Main,
} from '../Luna/components/layouts/default.style'
import { Home } from '../components/Home'
import { Navigation } from '../components/Navigation'

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <Navigation />
    <Main>
      <Home />
    </Main>
  </React.Fragment>
)

export default Index
