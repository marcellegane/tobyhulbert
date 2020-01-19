import React, { useEffect, useRef } from 'react'
import { Luna } from '../../Luna'
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

  useEffect(() => {
    const path = hiddenSvg.current

    if (!path.style.strokeDasharray) {
      const pathLength = path.getTotalLength()
      path.style.strokeDasharray = pathLength
      path.style.strokeDashoffset = pathLength
      path.style.transition = 'all 1s ease'
    }
  })

  const handleMouseEnter = e => {
    hiddenSvg.current.style.strokeDashoffset = 0
  }

  const handleMouseLeave = e => {
    hiddenSvg.current.style.strokeDashoffset = -hiddenSvg.current.getTotalLength()
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
            <SineWave />
            <SineWave ref={hiddenSvg} fill={Luna.color.tertiary.base} />
          </>
        )}

        {svg === 'square' && (
          <>
            <SquareWave />
            <SquareWave ref={hiddenSvg} fill={Luna.color.tertiary.base} />
          </>
        )}

        {svg === 'triangle' && (
          <>
            <TriangleWave />
            <TriangleWave ref={hiddenSvg} fill={Luna.color.tertiary.base} />
          </>
        )}
      </NavigationLinkUnderline>
    </NavigationLink>
  )
}

export { ThisNavigationLink as NavigationLink }
