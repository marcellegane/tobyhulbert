import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SineWave } from '../svgs/SineWave'
import { SquareWave } from '../svgs/SquareWave'
import { TriangleWave } from '../svgs/TriangleWave'
import {
  NavigationLink,
  NavigationLinkText,
  NavigationLinkUnderline,
} from './index.style'

const ThisNavigationLink = props => {
  const { text, width, svg, svgWidth, svgHeight } = props
  const textRef = useRef(null)
  const svgPathRef = useRef(null)
  let isRepeating = true
  const tl = useRef()

  tl.current = gsap.timeline({
    repeat: -1,
    paused: true,
    defaults: { duration: 0.7, ease: 'none' },
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
    gsap.to(text, { opacity: 1, ease: 'power2.inOut', duration: 0.7 })
    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0, ease: 'power2.inOut', duration: 0.7 }
    )
  }, [tl])

  const handleMouseEnter = () => {
    isRepeating = true
    tl.current.play()
  }

  const handleMouseLeave = () => {
    isRepeating = false
  }

  return (
    <NavigationLink
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
