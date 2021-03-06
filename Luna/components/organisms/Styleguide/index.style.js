import styled from 'styled-components'
import { TextStyle } from '../../../config/textStyle'
import { Layout } from '../../../config/layout'
import { Border } from '../../../config/border'
import { pxToRem } from '../../../tools/calculate'
import { LunaMedia } from '../../../tools/media'
import { Color } from '../../../config/color'
import { Font } from '../../../config/font'

const StyleguideTitle = styled.h2`
  ${TextStyle.Statement}
  font-weight: ${Font.weight.bold};
`

const StyleGuide = styled.div`
  padding-top: ${pxToRem('default', 2)};
  padding-bottom: ${pxToRem('default', 2)};
  margin-bottom: ${pxToRem('default', 3)};
`

const Title = styled.p`
  ${TextStyle.Title}
`

const Display = styled.p`
  ${TextStyle.Display}
`

const Large = styled.p`
  ${TextStyle.Large}
`

const BodyCopy = styled.p`
  ${TextStyle.BodyCopy}
`

const Small = styled.p`
  ${TextStyle.Small}
`

const TextLink = styled.span`
  ${TextStyle.TextLink}
`

const ColorSwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${pxToRem(-Layout.grid.unit, 0.5)};
  margin-right: ${pxToRem(-Layout.grid.unit, 0.5)};
`

const ColorSwatchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${pxToRem(100)};
  margin: ${pxToRem('default', 0.5)};
  text-align: center;
`

const ColorSwatch = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${pxToRem('default', 0.5)};
  background-color: ${props => props.backgroundColor};
  border-width: ${pxToRem(Border.width)};
  border-style: ${Border.style};
  border-color: ${props =>
    props.borderColor ? props.borderColor : props.backgroundColor};

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${LunaMedia.above('medium')`
    flex-direction: row;
	`}
`

const ColorBlock = styled.div`
  padding: ${pxToRem('default')};
  background-color: ${Color.grey.light};

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 40%;
  }
`

export {
  StyleGuide,
  Title,
  Display,
  Large,
  BodyCopy,
  Small,
  TextLink,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  ButtonRow,
  StyleguideTitle,
  ColorBlock,
}
