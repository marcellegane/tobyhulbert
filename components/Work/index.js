import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ImagesLoaded from 'react-images-loaded'
import { WorkItem } from '../WorkItem'
import { Work, WorkGrid } from './index.style'

// Images max-width 430px

const workItems = [
  {
    artist: 'Anderson East',
    project: 'Maybe We Never Die',
    role: 'Engineer',
    imageSrc: 'anderson-east_maybe-we-never-die.jpg',
  },
  {
    artist: 'Barry Gibb',
    project: 'Greenfields The Gibb Brothers’ Songbook',
    role: 'Assistant Engineer, Handclapping',
    imageSrc: 'barry-gibb_songbook.jpg',
  },
  {
    artist: 'Certainly So',
    project: 'Future Self Only Dreams',
    role: 'Producer, Mixer',
    imageSrc: 'certainly-so_future-self-only-dreams.jpg',
  },
  {
    artist: 'Dennis Caravello',
    project: '52 Pickup (Single)',
    role: 'Producer, Mixer',
    imageSrc: 'dennis-caravello_52-pickup-single.jpg',
  },
  {
    artist: 'Dennis Caravello',
    project: 'Susanna (Single)',
    role: 'Producer, Mixer',
    imageSrc: 'dennis-caravello_susanna.jpg',
  },
  {
    artist: 'Jade Bird',
    project: 'Different Kinds of Light',
    role: 'Additional Engineer',
    imageSrc: 'jade-bird_different-kinds-of-light.jpg',
  },
  {
    artist: 'Preditah',
    project: 'Glucose (D Double E Remix)',
    role: 'Vocal Engineer',
    imageSrc: 'preditah_glucose.jpg',
  },
  {
    artist: 'Swordbeach',
    project: 'Overlord',
    role: 'Mixer',
    imageSrc: 'swordbeach_overload.jpg',
  },
  {
    artist: 'Eddy Luna',
    project: 'If I Died',
    role: 'Mixer',
    imageSrc: 'eddy-luna_if-i-died.jpg',
  },
  {
    artist: 'Eddy Luna',
    project: 'What’s The Difference',
    role: 'Mixer',
    imageSrc: 'eddy-luna_whats-the-difference.jpg',
  },
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
    imageSrc: 'the-1975.jpg',
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
    imageSrc: 'keith-urban-burden.jpg',
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
    project: 'Good Luck With Whatever',
    role: 'Engineer, Mixing',
    imageSrc: 'dawes-good-luck.jpg',
  },
  {
    artist: 'Lori McKenna',
    project: 'The Balladeer',
    role: 'Engineer, Mixing',
    imageSrc: 'lori-mckenna-the-balladeer.jpg',
  },
  {
    artist: 'Amanda Shires',
    project: 'Deciphering Dreams',
    role: 'Engineer',
    imageSrc: 'amanda-shires-decipheringdreams.jpg',
  },
  {
    artist: 'Crown Lands',
    project: 'Crown Lands',
    role: 'Assistant & Additional Engineering',
    imageSrc: 'crown-lands-crown-lands.jpg',
  },
  {
    artist: 'Jason Isbell and the 400 Unit',
    project: 'Reunions',
    role: 'Assistant Engineer',
    imageSrc: 'jason-isbell-and-the-400-unit-reunions.jpg',
  },
  {
    artist: 'Wheeler Walker, Jr.',
    project: 'Drunk As Fuck (Single)',
    role: 'Engineer',
    imageSrc: 'wheeler-walker-jr-drunk-as-fuck-go-big-or-go-home.jpg',
  },
]

const filmItems = [
  {
    artist: 'The Rising',
    role: 'Mixing',
    imageSrc: 'the-rising.jpg',
  },
  {
    artist: 'The Eyes of Tammy Faye',
    role: 'Songs Engineer',
    imageSrc: 'the-eyes-of-tammy-faye.jpg',
  },
  {
    artist: 'Together',
    role: 'Mixer',
    imageSrc: 'together.jpg',
  },
  {
    artist: 'The Control Room',
    role: 'Strings Engineer',
    imageSrc: 'the-control-room.jpg',
  },
  {
    artist: "Trainwreck- Woodstock '99",
    role: 'Mixer',
    imageSrc: 'trainwreck-woodstock.jpg',
  },
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
            <WorkItem
              key={index}
              content={workItem}
              loaded={workLoaded}
              square
            />
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
