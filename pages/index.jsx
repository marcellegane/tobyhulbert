import React, { useState, useEffect, useRef } from 'react'
import { GlobalStyle, Main } from '../Luna/components/layouts/default.style'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Work } from '../components/Work'
import { About } from '../components/About'

const useIsInView = (margin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      { rootMargin: margin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.unobserve(ref.current)
    }
  }, [margin])

  return [ref, isIntersecting]
}

const Index = () => {
  const [ref, isIntersecting] = useIsInView('-34%')

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navigation />
      <Main>
        <Hero isHidden={isIntersecting} />
        <Work ref={ref} />
        <About />
      </Main>
    </React.Fragment>
  )
}

export default Index
