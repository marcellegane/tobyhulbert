import styled from 'styled-components'
import { Font } from '../config/font'
import { Layout } from '../config/layout'
import { Border } from '../config/border'
import { pixelMultiplier } from '../tools/calculate'

const StyleguideTitle = styled.h2`
  ${Font.style.Mega}
`

const StyleGuide = styled.div`
  width: 100%;
  padding-left: ${Layout.padding.default};
  padding-right: ${Layout.padding.default};
`

const Mega = styled.p`
  ${Font.style.Mega}
`

const Jumbo = styled.p`
  ${Font.style.Jumbo}
`

const ExtraLarge = styled.p`
  ${Font.style.ExtraLarge}
`

const Large = styled.p`
  ${Font.style.Large}
`

const BodyCopy = styled.p`
  ${Font.style.BodyCopy}
`

const Small = styled.p`
  ${Font.style.Small}
`

const TextLink = styled.span`
  ${Font.style.TextLink}
`

const ColorSwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ColorSwatchBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pixelMultiplier(Layout.margin.default, 0.5)};
  margin-right: ${pixelMultiplier(Layout.margin.default, 0.5)};
  margin-top: ${pixelMultiplier(Layout.margin.default, 0.5)};
  margin-bottom: ${pixelMultiplier(Layout.margin.default, 0.5)};
  justify-content: center;
  align-items: center;
  max-width: 100px;
  justify-content: center;
  text-align: center;
`

const ColorSwatch = styled.span`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: ${props => props.backgroundColor};
  margin-bottom: ${Layout.margin.default};
  border-width: ${Border.width};
  border-style: ${Border.style};
  border-color: ${props =>
    props.borderColor ? props.borderColor : props.backgroundColor};
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export {
  StyleGuide,
  Mega,
  Jumbo,
  ExtraLarge,
  Large,
  BodyCopy,
  Small,
  TextLink,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  ButtonRow,
  StyleguideTitle,
}
