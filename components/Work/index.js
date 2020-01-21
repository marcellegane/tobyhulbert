import React from 'react'
import { Work, WorkGrid, FilmGrid, WorkImg, FilmImg } from './index.style'

const workImages = [
  'bat-for-lashes.png',
  'R-12747002-1544654280-2085.jpeg.jpg',
  'frank-ocean-blond.jpg',
  'nc-distant-sky.jpg',
  'oh-wonder.jpg',
  'chic.jpg',
  'kasabian-4813.jpg',
  'kyan-lonely-river.jpg',
  'Daniel+Elms+-+Islandia+front.jpg',
  'royorbison_rpo_hp_mob3.jpg',
  'sam-smith.jpg',
  'sting.jpg',
  'thebasics-age-of-entitlement.jpg',
  'tonbruket-nubian-swimtrip.jpg',
  'yann-tiersen-eusa.jpg',
  'beach-boys.jpg',
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

const ThisWork = React.forwardRef((props, ref) => (
  <Work ref={ref}>
    <WorkGrid>
      {workImages.map(imageSrc => (
        <WorkImg key={imageSrc} src={`/images/work/${imageSrc}`} />
      ))}
    </WorkGrid>
    <FilmGrid>
      {filmImages.map(imageSrc => (
        <FilmImg key={imageSrc} src={`/images/film/${imageSrc}`} />
      ))}
    </FilmGrid>
  </Work>
))

ThisWork.displayName = 'Work'

export { ThisWork as Work }
