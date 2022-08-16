import PropTypes from 'prop-types'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import {
  WorkItem,
  WorkImg,
  WorkBackground,
  WorkArtist,
  WorkProject,
  WorkRole,
  WorkOverlay,
} from './index.style'

const ThisWorkItem = ({ content, loaded, square }) => {
  const { imageSrc, artist, project, role } = content
  const backgroundRef = useRef()
  const overlayRef = useRef()
  const tlReveal = gsap.timeline({ paused: true })

  useEffect(() => {
    tlReveal
      .fromTo(
        backgroundRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 0.25,
          ease: 'power3.out',
        }
      )
      .fromTo(
        overlayRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: 'power2.out',
        }
      )
  }, [tlReveal])

  const handleEnter = () => {
    if (!loaded) return

    tlReveal.play()
  }

  const handleLeave = () => {
    if (!loaded) return

    tlReveal.reverse()
  }
  return (
    <WorkItem
      onFocus={handleEnter}
      onMouseEnter={handleEnter}
      onBlur={handleLeave}
      onMouseLeave={handleLeave}
      square={square}
    >
      <WorkImg src={`images/work/${imageSrc}`} />
      <WorkBackground ref={backgroundRef} data-work-loader />
      <WorkOverlay ref={overlayRef} loaded={loaded}>
        <WorkArtist>{artist}</WorkArtist>
        {project && <WorkProject>{project}</WorkProject>}
        <WorkRole>{role}</WorkRole>
      </WorkOverlay>
    </WorkItem>
  )
}

ThisWorkItem.propTypes = {
  content: PropTypes.object,
  loaded: PropTypes.bool,
  square: PropTypes.bool,
}

export { ThisWorkItem as WorkItem }
