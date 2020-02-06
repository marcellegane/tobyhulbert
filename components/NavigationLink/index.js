import React from 'react'
import gsap from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import { SineWave } from '../svgs/SineWave'
import { SquareWave } from '../svgs/SquareWave'
import { TriangleWave } from '../svgs/TriangleWave'
import {
  NavigationLink,
  NavigationLinkText,
  NavigationLinkUnderline,
  NavigationLinkMain,
} from './index.style'
import { TextMask } from '../TextMask'

gsap.registerPlugin(ScrollToPlugin)

class ThisNavigationLink extends React.Component {
  constructor(props) {
    super(props)

    this.svgPath = null
    this.isRepeating = true
    this.tl = gsap.timeline({
      repeat: -1,
      paused: true,
      defaults: { duration: 0.5, ease: 'none' },
      onRepeat: () => {
        if (!this.isRepeating) {
          this.tl.pause()
        }
      },
    })

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const pathLength = this.svgPath.getTotalLength()

    gsap.set(this.svgPath, {
      opacity: 1,
      strokeDasharray: pathLength,
      strokeDashoffset: 0,
    })

    this.tl
      .fromTo(
        this.svgPath,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -pathLength,
        }
      )
      .fromTo(
        this.svgPath,
        { strokeDashoffset: pathLength },
        { strokeDashoffset: 0 }
      )

    // Page load animations
    gsap.fromTo(
      this.svgPath,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0, ease: 'power2.inOut', duration: 0.7 }
    )
  }

  handleMouseEnter() {
    this.isRepeating = true
    this.tl.play()
  }

  handleMouseLeave() {
    this.isRepeating = false
  }

  handleClick(e) {
    const { href } = this.props
    e.preventDefault()

    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: href, offsetY: 32 },
      ease: 'power3.out',
    })
  }

  render() {
    const { showText, href, text, width, svg, svgWidth, svgHeight } = this.props

    return (
      <NavigationLink
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <NavigationLinkMain>
          <TextMask show={showText}>
            <NavigationLinkText>{text}</NavigationLinkText>
          </TextMask>
          <NavigationLinkUnderline
            width={width}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
          >
            {svg === 'sine' && (
              <>
                <SineWave ref={path => (this.svgPath = path)} />
              </>
            )}

            {svg === 'square' && (
              <>
                <SquareWave ref={path => (this.svgPath = path)} />
              </>
            )}

            {svg === 'triangle' && (
              <>
                <TriangleWave ref={path => (this.svgPath = path)} />
              </>
            )}
          </NavigationLinkUnderline>
        </NavigationLinkMain>
      </NavigationLink>
    )
  }
}

export { ThisNavigationLink as NavigationLink }
