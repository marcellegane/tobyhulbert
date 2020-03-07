import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ImagesLoaded from 'react-images-loaded'
import { WorkItem } from '../WorkItem'
import { Work, WorkGrid } from './index.style'

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

const filmItems = [
  {
    artist: "A Serial Killer's Guide to Life",
    role: 'Recording Engineer and Mixer',
    imageSrc: 'film-serial.jpg',
  },
  {
    artist: "Journey's End",
    role: 'Engineer and Score Mixer',
    imageSrc: 'film-journeys-end.jpg',
  },
  {
    artist: 'Suburbicon',
    role: 'Score Recordist',
    imageSrc: 'film-suburbicon.jpg',
  },
  {
    artist: 'Allied',
    role: 'Score Recordist',
    imageSrc: 'film-allied.jpg',
  },
  {
    artist: 'The Martian',
    role: 'Digital Scoring Engineer',
    imageSrc: 'film-the-martian.jpg',
  },
  {
    artist: 'Suffragette',
    role: 'Score Editor and Score Recordist',
    imageSrc: 'film-suffragette.jpg',
  },
  {
    artist: 'Avengers: Age of Ultron',
    role: 'Score Recordist',
    imageSrc: 'film-avengers.jpg',
  },
  {
    artist: 'The Imitation Game',
    role: 'Score Recordist and Mix Assistant',
    imageSrc: 'film-the-imitation-game.jpg',
  },
  {
    artist: 'Gravity',
    role: 'Score Recordist',
    imageSrc: 'film-gravity.jpg',
  },
  {
    artist: 'Rocketman',
    role: 'Asssistant Engineer',
    imageSrc: 'film-rocketman.jpg',
  },
]

const ThisWork = () => {
  const forwardedRef = useRef()
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [workLoaded, setWorkLoaded] = useState(false)
  const [startLoadAnimation, setStartLoadAnimation] = useState(false)

  const onImagesLoaded = () => {
    setImagesLoaded(true)
  }

  setTimeout(() => {
    setStartLoadAnimation(true)
  }, 500)

  useEffect(() => {
    if (imagesLoaded && startLoadAnimation) {
      const workBlocks = forwardedRef.current
      const loaders = workBlocks.querySelectorAll('[data-work-loader]')
      const imgs = workBlocks.querySelectorAll('img')
      const tl = gsap.timeline({
        onComplete: () => {
          setWorkLoaded(true)
        },
      })

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
            <WorkItem key={index} content={workItem} loaded={workLoaded} />
          ))}
        </WorkGrid>

        <WorkGrid>
          {filmItems.map((workItem, index) => (
            <WorkItem key={index} content={workItem} loaded={workLoaded} />
          ))}
        </WorkGrid>
      </ImagesLoaded>
    </Work>
  )
}

ThisWork.displayName = 'Work'

export { ThisWork as Work }
