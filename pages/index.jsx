import React from 'react'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Work } from '../components/Work'
import { About } from '../components/About'

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <Navigation />
    <Main>
      <Hero />
      <Work />
      <About />
    </Main>
  </React.Fragment>
)

export default Index
