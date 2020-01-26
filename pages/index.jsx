import React, { useState, useEffect, useRef } from 'react'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Work } from '../components/Work'
import { About } from '../components/About'

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
  const [workRef, isIntersecting] = useIsInView('-28%')

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navigation />
      <Main>
        <Hero isHidden={isIntersecting} />
        <Work ref={workRef} />
        <About />
      </Main>
    </React.Fragment>
  )
}

export default Index
