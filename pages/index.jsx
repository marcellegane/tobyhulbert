import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import {
  MenuToggle,
  MenuToggleText,
  HomeMain,
} from '../components/pages/Home/index.style'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Work } from '../components/Work'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { SineWave } from '../components/svgs/SineWave'

const Index = () => {
  const [showText, setShowText] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [heroIsHidden, setHeroIsHidden] = useState(false)

  const toggleNavigation = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  useScrollPosition(
    ({ currPos }) => {
      const shouldBeHidden = currPos.y < -50
      if (shouldBeHidden !== heroIsHidden) {
        setHeroIsHidden(shouldBeHidden)
      }
    },
    [heroIsHidden]
  )

  useEffect(() => {
    setTimeout(() => {
      setShowText(true)
    }, 400)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Toby Hulbert | Engineer. Mixer. Producer</title>
      </Head>
      <GlobalStyle />
      <MenuToggle onClick={toggleNavigation}>
        <MenuToggleText>Open menu</MenuToggleText>
        <SineWave />
      </MenuToggle>
      <Navigation menuIsOpen={menuIsOpen} showText={showText} />
      <Main>
        <Hero isHidden={heroIsHidden} />
        <HomeMain>
          <Work />
          <About />
          <Contact />
        </HomeMain>
      </Main>
    </React.Fragment>
  )
}

export default Index
