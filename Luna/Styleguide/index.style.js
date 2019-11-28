import styled from 'styled-components'
import { TextStyle } from '../config/textStyle'
import { Layout } from '../config/layout'
import { Border } from '../config/border'
import { pxToRem } from '../tools/calculate'
import { LunaMedia } from '../tools/media'
import { Color } from '../config/color'

const StyleguideTitle = styled.h2`
  font-weight: normal;
  font-size: ${pxToRem(40)};
  line-height: ${56 / 40};
`

const StyleGuide = styled.div`
  margin-bottom: ${pxToRem(Layout.grid.unit, 3)};
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
`

const ColorSwatchBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxToRem(Layout.grid.unit, 0.5)};
  margin-right: ${pxToRem(Layout.grid.unit, 0.5)};
  margin-top: ${pxToRem(Layout.grid.unit, 0.5)};
  margin-bottom: ${pxToRem(Layout.grid.unit, 0.5)};
  justify-content: center;
  align-items: center;
  max-width: ${pxToRem(100)};
  justify-content: center;
  text-align: center;
`

const ColorSwatch = styled.span`
  display: flex;
  flex-direction: column;
  height: ${pxToRem(100)};
  width: ${pxToRem(100)};
  border-radius: 100%;
  background-color: ${props => props.backgroundColor};
  margin-bottom: ${pxToRem(Layout.grid.unit)};
  border-width: ${pxToRem(Border.width)};
  border-style: ${Border.style};
  border-color: ${props =>
    props.borderColor ? props.borderColor : props.backgroundColor};
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
  background-color: ${Color.grey.light};

  ::before {
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
