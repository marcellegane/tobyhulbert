import styled from 'styled-components'
import { LunaMedia } from '../../../tools/media'
import { Border } from '../../../config/border'
import { Color } from '../../../config/color'
import { Font } from '../../../config/font'
import { Layout } from '../../../config/layout'

import { pixelMultiplier } from '../../../tools/calculate'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: ${Layout.margin.default};
  font-family: ${Font.family.brand};
  z-index: 999;

  ${LunaMedia.above('medium')`
    padding: ${pixelMultiplier(Layout.margin.default, 2)};
  `}

  ${LunaMedia.above('xxxlarge')`
    align-items: center;
  `}
`

const ModalBg = styled.div`
  display: ${props => (props.show && props.showModalBg ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  ${props => (props.fullHeight ? 'height: 100%;' : '')}
  padding: ${pixelMultiplier(Layout.margin.default, 1.5)} ${pixelMultiplier(
  Layout.margin.default,
  2
)} ${pixelMultiplier(Layout.margin.default, 2)};
  overflow: hidden;
  font-family: ${Font.family.brand};
  background-color: #fff;
  border-radius: 10px;
  background-color: ${Color.background};
  box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.36);
`

const ModalHeader = styled.div`
  border-top-left-radius: ${Border.radius};
  border-top-right-radius: ${Border.radius};

  p {
    ${Font.style.BodyCopy}
    margin-top: 0;
    margin-bottom: 0;
  }
`

function getModalHeaderAlign(align) {
  const cssValues = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  return cssValues[align]
}

const ModalHeading = styled.div``

const ModalTitle = styled.h2`
  ${Font.style.Mega}
  font-size: 24px;
  margin-top: ${pixelMultiplier(Layout.margin.default, 0.5)};
  margin-bottom: 0;
  display: flex;
  justify-content: ${props => getModalHeaderAlign(props.align)};
`

const ModalFooter = styled.div`
  background: ${Color.background};
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${Font.family.brand};
`

const ModalClose = styled.span`
  font-size: 16px;
  color: ${props => props.closeColor};
  font-family: ${Font.family.brand};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  cursor: pointer;
`

const ModalCloseText = styled.span`
  margin-right: ${pixelMultiplier(Layout.margin.default, 0.5)};
`

const ModalBodyText = styled.p`
  ${Font.style.Small}
  color: ${Color.foreground};
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin-top: 0;
  margin-bottom: 0;
`

const ModalButton = styled.div`
  margin-top: ${pixelMultiplier(Layout.margin.default, 1.5)};
`

export {
  Modal,
  ModalBg,
  ModalInner,
  ModalHeader,
  ModalTitle,
  ModalHeading,
  ModalFooter,
  ModalClose,
  ModalCloseText,
  ModalBodyText,
  ModalButton,
}
