import styled from 'styled-components'
import { Font } from '../../../config/font'
import { Color } from '../../../config/color'
import { Layout } from '../../../config/layout'
import { LunaMedia } from '../../../tools'
import { pixelMultiplier } from '../../../tools/calculate'
import Util from '../../../tools/util'

const CheckboxGroup = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${Color.background};

  ${LunaMedia.below('small')`
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	`}

  ${LunaMedia.above('small')`
		position: absolute;
		top: 0;
		left: calc(100% + ${Layout.margin.default});
		width: 300px;
		max-height: 500px;
		border-radius: 0 4px 4px 0;
		box-shadow: 0 1px 2px 0 rgba(17,17,17,0.25);
	`}
`

const CheckboxGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pixelMultiplier(Layout.padding.default, 0.75)}
    ${Layout.padding.default};
`

const CheckboxGroupLabel = styled.h5`
  ${Font.style.BodyCopy}
	font-weight: ${Font.weight.medium};
`

const CheckboxGroupClose = styled.button`
  width: ${pixelMultiplier(Layout.padding.default, 2)};
  height: ${pixelMultiplier(Layout.padding.default, 2)};
  padding: 0;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  border: none;
  background-color: transparent;
  background-image: ${Util.getBackgroundImageCross()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
`

const CheckboxGroupMain = styled.div`
  padding: ${pixelMultiplier(Layout.padding.default, 1.5)}
    ${Layout.padding.default};
  overflow: scroll;
  border-top: 1px solid ${Color.neutral};
`

export {
  CheckboxGroup,
  CheckboxGroupHeader,
  CheckboxGroupLabel,
  CheckboxGroupClose,
  CheckboxGroupMain,
}
