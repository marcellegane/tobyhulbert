import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ImagesLoaded from 'react-images-loaded'
import {
  Work,
  WorkGrid,
  WorkItem,
  WorkImg,
  WorkLoader,
  WorkArtist,
  WorkProject,
  WorkRole,
  WorkOverlay,
} from './index.style'

const workItems = [
  {
    artist: 'Nick Cave and the Bad Seeds',
    project: 'Live Concert 5.1 Mix',
    role: 'Mixing',
    imageSrc: 'nc-distant-sky.jpg',
  },
  {
    artist: 'Yussef Dayes x Alfa Mist',
    project: 'Love is the Message Live Session',
    role: 'Engineer',
    imageSrc: 'yussef-dayes.jpg',
  },
  {
    artist: 'Oh Wonder',
    project: 'Oh Wonder',
    role: 'Strings Engineer',
    imageSrc: 'oh-wonder.jpg',
  },
  {
    artist: 'Frank Ocean',
    project: 'Blonde',
    role: 'Assistant Engineer',
    imageSrc: 'frank-ocean-blond.jpg',
  },
  {
    artist: 'Yann Tiersen',
    project: 'Eusa',
    role: 'Engineer',
    imageSrc: 'yann-tiersen-eusa.png',
  },
  {
    artist: 'Kasabian',
    project: '48.13',
    role: 'Strings Engineer',
    imageSrc: 'kasabian-4813.jpg',
  },
  {
    artist: 'The 1975',
    project: 'A Brief Enquiry Into Online Relationships',
    role: 'Strings Assistant Engineer',
    imageSrc: 'the-1975.png',
  },
  {
    artist: 'Airbourne',
    project: 'Boneshaker',
    role: 'Engineer',
    imageSrc: 'airbourne.jpg',
  },
  {
    artist: 'Dirty Heads',
    project: 'Super Moon',
    role: 'Engineer, Mixing',
    imageSrc: 'dirty-heads.jpg',
  },
  {
    artist: 'Keith Urban',
    project: 'Burden',
    role: 'Engineer',
    imageSrc: 'R-12747002-1544654280-2085.jpeg.jpg',
  },
  {
    artist: 'The Highwomen',
    project: 'The Highwomen',
    role: 'Assistant Engineer',
    imageSrc: 'thehighwomen-thehighwomen.jpg',
  },
  {
    artist: 'The Highwomen',
    project: 'The Chain',
    role: 'Engineer',
    imageSrc: 'thehighwomen-thechain.jpg',
  },
  {
    artist: 'Chic / Nile Rodgers',
    project: "It's About Time",
    role: 'Assistant Engineer',
    imageSrc: 'chic-time.jpg',
  },
  {
    artist: 'Dawes',
    project: 'Forthcoming Record',
    role: '',
    imageSrc: 'default-grey.png',
  },
  {
    artist: 'Lori McKenna',
    project: 'Forthcoming Record',
    role: '',
    imageSrc: 'default-grey.png',
  },
  {
    artist: 'Anderson East',
    project: 'Forthcoming Record',
    role: '',
    imageSrc: 'default-grey.png',
  },
]

const filmImages = [
  '1d3d-one-direction-this-is-us-poster.jpg',
  // '220px-The_Kitchen_poster.jpeg',
  'Alice-Through-The-Looking-Glass2.png',
  'Allied-Film-Poster.jpeg',
  'avengers.jpg',
  'danish_girl-4-FOCUS-FEATURES.jpg',
  // 'dirty-heads-super-moon.jpg',
  // 'disobience-poster.jpg',
  'disobience.jpg',
  'early-man-poster.jpg',
  'exodus-gods-and-kings-poster-01.jpg',
  'Gravity_poster2.jpg',
  'journeysend-poster.jpg',
  'london-has-fallen-poster.jpg',
  'monkeykingdom-poster.jpeg',
  'Mortdecai.jpg',
  'Nick-Cave-And-The-Bad-Seeds-Distant-Sky-poster.jpg',
  'Palm-Trees-in-the-snow-poster.jpg',
  'prophet_poster2.jpg',
  'Regression-poster.jpg',
  'seven-psychopaths-header.jpeg',
  'Suburbicon-UK-banner.jpg',
  'Suffragette-poster.jpg',
  'The-Martian-Poster-20th-century-fox.jpg',
  'The-Imitation-Game-Final-Poster.jpg',
  'Zookeeper-wife-poster-focus-features.jpg',
]

const ThisWork = () => {
  const forwardedRef = useRef()
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [startLoadAnimation, setStartLoadAnimation] = useState(false)

  setTimeout(() => {
    setStartLoadAnimation(true)
  }, 500)

  const onImagesLoaded = () => {
    setImagesLoaded(true)
  }

  useEffect(() => {
    if (imagesLoaded && startLoadAnimation) {
      const workBlocks = forwardedRef.current
      const loaders = workBlocks.querySelectorAll('[data-work-loader]')
      const imgs = workBlocks.querySelectorAll('img')
      const tl = gsap.timeline()

      tl.to(loaders, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power3.in',
        stagger: 0.05,
      })
      tl.set(imgs, { opacity: 1, stagger: 0.05 }, 0.4)
      tl.set(loaders, { transformOrigin: '50% 100%', stagger: 0.05 }, 0.4)
      tl.to(
        loaders,
        {
          scaleY: 0,
          duration: 0.4,
          ease: 'power3.in',
          stagger: 0.05,
        },
        0.4
      )
    }
  }, [forwardedRef, imagesLoaded, startLoadAnimation])

  return (
    <Work id="work" ref={forwardedRef}>
      <ImagesLoaded done={onImagesLoaded}>
        <WorkGrid>
          {workItems.map((workItem, index) => (
            <WorkItem key={index}>
              <WorkImg src={`images/work/${workItem.imageSrc}`} />
              <WorkLoader data-work-loader />
              <WorkOverlay>
                <WorkArtist>{workItem.artist}</WorkArtist>
                <WorkProject>{workItem.project}</WorkProject>
                <WorkRole>{workItem.role}</WorkRole>
              </WorkOverlay>
            </WorkItem>
          ))}
        </WorkGrid>
      </ImagesLoaded>
    </Work>
  )
}

ThisWork.displayName = 'Work'

export { ThisWork as Work }
