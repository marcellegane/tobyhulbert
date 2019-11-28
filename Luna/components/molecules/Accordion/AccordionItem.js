import React from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'

import {
  AccordionItem,
  AccordionItemHeader,
  AccordionItemLabel,
  AccordionItemIcon,
  AccordionItemMain,
  AccordionItemContent,
} from './AccordionItem.style'
import { IconWrapper } from '../../atoms/Icon/IconWrapper'
import { IconPlus } from '../../../svgs/icons/IconPlus'

class ThisAccordionItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen,
    }

    this.contentRef = React.createRef()
    this.contentInnerRef = React.createRef()
    this.handleItemToggle = this.handleItemToggle.bind(this)
  }

  componentDidMount() {
    const { isOpen } = this.state

    if (isOpen) {
      this.contentRef.current.style.display = 'block'
      this.contentInnerRef.current.style.opacity = 1
    }
  }

  handleItemToggle() {
    const { isOpen } = this.state
    const content = this.contentRef.current
    const contentInner = this.contentInnerRef.current

    if (isOpen) {
      const tl = gsap.timeline({
        onComplete: () => {
          content.style.display = 'none'
          content.style.height = ''
        },
      })

      tl.to(content, {
        duration: 0.3,
        height: 0,
        ease: 'power3.out',
      }).to(
        contentInner,
        {
          duration: 0.1,
          opacity: 0,
        },
        0
      )
    } else {
      content.style.display = 'block'
      const contentHeight = content.offsetHeight
      content.style.height = 0

      const tl = gsap.timeline({
        onComplete: () => {
          content.style.height = ''
        },
      })

      tl.to(content, {
        duration: 0.3,
        height: contentHeight,
        ease: 'power3.out',
      }).fromTo(
        contentInner,
        {
          duration: 0.3,
          yPercent: -100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          delay: 0.1,
          ease: 'power2.out',
        },
        0.1
      )
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { children, label } = this.props
    const { isOpen } = this.state

    return (
      <>
        {children && label && (
          <AccordionItem data-test="accordion-item">
            <AccordionItemHeader
              isOpen={isOpen}
              onClick={this.handleItemToggle}
            >
              <AccordionItemLabel>{label}</AccordionItemLabel>
              <AccordionItemIcon isOpen={isOpen}>
                <IconWrapper width={14} height={14}>
                  <IconPlus />
                </IconWrapper>
              </AccordionItemIcon>
            </AccordionItemHeader>

            <AccordionItemMain ref={this.contentRef}>
              <AccordionItemContent ref={this.contentInnerRef}>
                {children}
              </AccordionItemContent>
            </AccordionItemMain>
          </AccordionItem>
        )}
      </>
    )
  }
}

export { ThisAccordionItem as AccordionItem }
