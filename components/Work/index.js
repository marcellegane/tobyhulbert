import React, { useEffect } from 'react'
import gsap from 'gsap'
import ImagesLoaded from 'react-images-loaded'
import {
  Work,
  WorkGrid,
  WorkItem,
  WorkImg,
  WorkArtist,
  WorkProject,
  WorkRole,
  WorkOverlay,
} from './index.style'

const workItems = [
  {
    artist: 'Airbourne',
    project: 'Forthcoming album',
    role: 'Recording engineer',
    imageSrc: 'bat-for-lashes.png',
  },
  {
    artist: 'Keith Urban',
    project: 'Burden',
    role: 'Recording engineer',
    imageSrc: 'R-12747002-1544654280-2085.jpeg.jpg',
  },
  {
    artist: 'Dawes',
    project: 'Forthcoming album',
    role: 'Recording and Mixing',
    imageSrc: 'frank-ocean-blond.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'nc-distant-sky.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'oh-wonder.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'chic.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'kasabian-4813.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'kyan-lonely-river.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'Daniel+Elms+-+Islandia+front.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'royorbison_rpo_hp_mob3.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'sam-smith.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'sting.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'thebasics-age-of-entitlement.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'tonbruket-nubian-swimtrip.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'yann-tiersen-eusa.jpg',
  },
  {
    artist: 'Artist',
    project: 'Project of note',
    role: 'Recording engineer',
    imageSrc: 'beach-boys.jpg',
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

const ThisWork = React.forwardRef((props, ref) => {
  const onImageLoaded = instance => {
    const overlayWrapper = instance.elements[0]
    const overlay = overlayWrapper.querySelector('[data-work-overlay]')
    const img = overlayWrapper.querySelector('img')
    const tl = gsap.timeline()

    tl.to(overlay, { scaleY: 1, duration: 0.4, ease: 'power3.out' })
    tl.set(img, { opacity: 1 })
    tl.set(overlay, { transformOrigin: '50% 0%' })
    tl.to(overlay, { scaleY: 0, duration: 0.4, ease: 'power3.out' })
    tl.set(overlay, { clearProps: true })
  }

  useEffect(() => {}, [])

  return (
    <Work id="work" ref={ref}>
      <WorkGrid>
        {workItems.map((workItem, index) => (
          <WorkItem key={index}>
            <ImagesLoaded done={onImageLoaded}>
              <WorkImg src={`/images/work/${workItem.imageSrc}`} />
              <WorkOverlay data-work-overlay>
                <WorkArtist>{workItem.artist}</WorkArtist>
                <WorkProject>{workItem.project}</WorkProject>
                <WorkRole>{workItem.role}</WorkRole>
              </WorkOverlay>
            </ImagesLoaded>
          </WorkItem>
        ))}
      </WorkGrid>
    </Work>
  )
})

ThisWork.displayName = 'Work'

export { ThisWork as Work }
