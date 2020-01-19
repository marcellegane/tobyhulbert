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
  const { children, text, width, svg, svgWidth, svgHeight } = props
  const hiddenSvg = useRef(null)
  let isRepeating = true
  const tl = useRef()

  tl.current = gsap.timeline({
    repeat: -1,
    paused: true,
    defaults: { duration: 0.6 },
    onRepeat: () => {
      if (!isRepeating) {
        tl.current.pause()
      }
    },
  })

  useEffect(() => {
    const path = hiddenSvg.current
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
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        path,
        { strokeDashoffset: pathLength },
        { strokeDashoffset: 0, ease: 'power2.inOut' }
      )

    gsap.fromTo(path, { strokeDashoffset: pathLength }, { strokeDashoffset: 0 })
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
      <NavigationLinkText>{text}</NavigationLinkText>
      <NavigationLinkUnderline
        width={width}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
      >
        {svg === 'sine' && (
          <>
            <SineWave ref={hiddenSvg} />
          </>
        )}

        {svg === 'square' && (
          <>
            <SquareWave ref={hiddenSvg} />
          </>
        )}

        {svg === 'triangle' && (
          <>
            <TriangleWave ref={hiddenSvg} />
          </>
        )}
      </NavigationLinkUnderline>
    </NavigationLink>
  )
}

export { ThisNavigationLink as NavigationLink }
