import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SineWave } from '../svgs/SineWave'
import { SquareWave } from '../svgs/SquareWave'
import { TriangleWave } from '../svgs/TriangleWave'
import {
  NavigationLink,
  NavigationLinkText,
  NavigationLinkUnderline,
} from './index.style'

gsap.registerPlugin(ScrollToPlugin)

const ThisNavigationLink = props => {
  const { href, text, width, svg, svgWidth, svgHeight, position } = props
  let isRepeating = true
  const textRef = useRef(null)
  const svgPathRef = useRef(null)
  const tl = useRef()

  tl.current = gsap.timeline({
    repeat: -1,
    paused: true,
    defaults: { duration: 0.5, ease: 'none' },
    onRepeat: () => {
      if (!isRepeating) {
        tl.current.pause()
      }
    },
  })

  useEffect(() => {
    const text = textRef.current
    const path = svgPathRef.current
    const pathLength = path.getTotalLength()

    gsap.set(path, {
      opacity: 1,
      strokeDasharray: pathLength,
      strokeDashoffset: 0,
    })

    tl.current
      .fromTo(
        path,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -pathLength,
        }
      )
      .fromTo(path, { strokeDashoffset: pathLength }, { strokeDashoffset: 0 })

    // Page load animations
    if (position === 'topLeft' || position === 'bottomLeft') {
      gsap.fromTo(
        text,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, ease: 'power2.inOut', duration: 0.7 }
      )
    } else {
      gsap.fromTo(
        text,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, ease: 'power2.inOut', duration: 0.7 }
      )
    }

    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0, ease: 'power2.inOut', duration: 0.7 }
    )
  }, [position, tl])

  const handleMouseEnter = () => {
    isRepeating = true
    tl.current.play()
  }

  const handleMouseLeave = () => {
    isRepeating = false
  }

  const scrollToSection = e => {
    e.preventDefault()

    // gsap.to(window, {
    //   duration: 2,
    //   scrollTo: href,
    // })
  }

  return (
    <NavigationLink
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
    >
      <NavigationLinkText ref={textRef}>{text}</NavigationLinkText>
      <NavigationLinkUnderline
        width={width}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
      >
        {svg === 'sine' && (
          <>
            <SineWave ref={svgPathRef} />
          </>
        )}

        {svg === 'square' && (
          <>
            <SquareWave ref={svgPathRef} />
          </>
        )}

        {svg === 'triangle' && (
          <>
            <TriangleWave ref={svgPathRef} />
          </>
        )}
      </NavigationLinkUnderline>
    </NavigationLink>
  )
}

export { ThisNavigationLink as NavigationLink }
