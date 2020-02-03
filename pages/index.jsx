import React, { useState, useEffect, useRef } from 'react'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import {
  MenuToggle,
  MenuToggleText,
} from '../components/pages/Home/index.style'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Work } from '../components/Work'
import { About } from '../components/About'
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
  const [workRef, isIntersecting] = useIsInView('-28%')

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
      <GlobalStyle />
      <MenuToggle onClick={toggleNavigation}>
        <MenuToggleText>Open menu</MenuToggleText>
        <SineWave />
      </MenuToggle>
      <Navigation menuIsOpen={menuIsOpen} showText={showText} />
      <Main>
        <Hero isHidden={isIntersecting} showText={showText} />
        <Work forwardedRef={workRef} />
        <About />
      </Main>
    </React.Fragment>
  )
}

export default Index
