import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalBg,
  ModalInner,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalBodyFullWidth,
  ModalFooter,
  ModalTitle,
  ModalClose,
  ModalCloseText,
  ModalBodyText,
} from './index.style'
import { IconCross } from '../../../svgs/icons/IconCross'
import { Luna } from '../../../config'

class ThisModal extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    fullHeight: PropTypes.bool,
    showModalBg: PropTypes.bool,
  }

  static defaultProps = {
    fullHeight: true,
    showModalBg: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  show() {
    this.originalWindowScrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${this.originalWindowScrollY}px`

    this.setState({
      show: true,
    })
  }

  hide() {
    document.body.style.position = ''
    window.scrollTo(0, this.originalWindowScrollY)

    this.setState({
      show: false,
    })
  }

  render() {
    const { children, fullHeight, showModalBg } = this.props
    const { show } = this.state
    return (
      <>
        {showModalBg && <ModalBg show={show} showModalBg={showModalBg} />}
        <Modal show={show} fullHeight={fullHeight}>
          <ModalInner fullHeight={fullHeight}>{children}</ModalInner>
        </Modal>
      </>
    )
  }
}

const ThisModalHeader = ({ children }) => <ModalHeader>{children}</ModalHeader>

ThisModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

const ThisModalHeading = props => {
  const { title, align, closeText, closeColor, onClose } = props
  return (
    <ModalHeading>
      <ModalClose
        onClick={onClose}
        closeColor={closeColor}
        data-test="Modal-close"
      >
        <ModalCloseText>{closeText}</ModalCloseText>
        <IconCross fillColor={closeColor} />
      </ModalClose>
      <ModalTitle align={align}>{title}</ModalTitle>
    </ModalHeading>
  )
}

ThisModalHeading.defaultProps = {
  closeColor: Luna.color.foreground,
}

ThisModalHeading.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  closeText: PropTypes.string,
  closeColor: PropTypes.string,
  onClose: PropTypes.func,
}

const ThisModalBody = ({ children }) => <ModalBody>{children}</ModalBody>

ThisModalBody.propTypes = {
  children: PropTypes.node.isRequired,
}

const ThisModalBodyFullWidth = ({ children }) => (
  <ModalBodyFullWidth>{children}</ModalBodyFullWidth>
)

ThisModalBodyFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

const ThisModalBodyText = ({ text, center }) => (
  <ModalBodyText center={center}>{text}</ModalBodyText>
)

ThisModalBodyText.propTypes = {
  text: PropTypes.string,
  center: PropTypes.bool,
}

ThisModalBodyText.defaultProps = {
  center: false,
}

const ThisModalFooter = ({ children }) => <ModalFooter>{children}</ModalFooter>

ThisModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export {
  ThisModal as Modal,
  ThisModalHeader as ModalHeader,
  ThisModalHeading as ModalHeading,
  ThisModalBody as ModalBody,
  ThisModalBodyFullWidth as ModalBodyFullWidth,
  ThisModalFooter as ModalFooter,
  ThisModalBodyText as ModalBodyText,
}
