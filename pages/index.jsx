import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import {
  MenuToggle,
  MenuToggleText,
  MenuToggleBezel,
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
    if (window.pageYOffset > 0) {
      setHeroIsHidden(true)
    }

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
        <MenuToggleBezel>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="#FAFAFA"
              fillRule="evenodd"
              d="M22,0 L2,0 L2,20 C3.11111111,15.3333333 5.33333333,11.3333333 8.66666667,8 C12,4.66666667 16.4444444,2 22,0 Z"
              transform="matrix(-1 0 0 1 24 0)"
            />
          </svg>
        </MenuToggleBezel>
        <MenuToggleBezel>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="#FAFAFA"
              fillRule="evenodd"
              d="M20,0 L0,0 L0,20 C1.11111111,15.3333333 3.33333333,11.3333333 6.66666667,8 C10,4.66666667 14.4444444,2 20,0 Z"
            />
          </svg>
        </MenuToggleBezel>
        <MenuToggleText>Open menu</MenuToggleText>
        <SineWave />
      </MenuToggle>
      <Navigation
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        showText={showText}
      />
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
