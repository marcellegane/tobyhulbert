import { useEffect, useState } from 'react'
import { NavigationLink } from '../NavigationLink'
import { Navigation } from './index.style'

const ThisNavigation = ({ menuIsOpen, setMenuIsOpen, showText }) => {
  const [showProjects, setShowProjects] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    const enterDelay = 150

    setTimeout(() => {
      setShowProjects(true)
    }, enterDelay)

    setTimeout(() => {
      setShowAbout(true)
    }, enterDelay * 2)

    setTimeout(() => {
      setShowContact(true)
    }, enterDelay * 3)
  })

  return (
    <Navigation menuIsOpen={menuIsOpen} data-test={menuIsOpen}>
      <NavigationLink
        index={3}
        showText={showProjects}
        href="#work"
        text="Projects"
        width={90}
        svg="sine"
        svgWidth={100}
        svgHeight={18}
        position="topLeft"
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />

      <NavigationLink
        index={2}
        showText={showAbout}
        href="#about"
        text="About"
        width={74}
        svg="triangle"
        svgWidth={84}
        svgHeight={18}
        position="topRight"
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />

      <NavigationLink
        index={1}
        showText={showContact}
        href="#contact"
        text="Contact"
        width={100}
        svg="square"
        svgWidth={108}
        svgHeight={18}
        position="bottomLeft"
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
    </Navigation>
  )
}

export { ThisNavigation as Navigation }
