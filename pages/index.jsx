import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
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

const useIsInView = (margin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)
  const workRef = useRef()

  useEffect(() => {
    const observerCallback = ([entry]) => {
      setIntersecting(entry.isIntersecting)
    }
    const observerOptions = { rootMargin: margin }
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const refCurrent = workRef.current

    if (refCurrent) {
      observer.observe(refCurrent)
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent)
      }
    }
  }, [margin])

  return [workRef, isIntersecting]
}

const Index = () => {
  const [showText, setShowText] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [workRef, isIntersecting] = useIsInView('-250px')

  const toggleNavigation = () => {
    setMenuIsOpen(!menuIsOpen)
  }

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
        <Hero isHidden={isIntersecting} />
        <HomeMain ref={workRef}>
          <Work />
          <About />
          <Contact />
        </HomeMain>
      </Main>
    </React.Fragment>
  )
}

export default Index
