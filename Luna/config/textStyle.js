import { css } from 'styled-components'
import { Font } from './font'
import { Color } from './color'
import { pxToRem } from '../tools/calculate'

const TextStyles = {
  statement: {
    size: 40,
    lineHeight: 56,
  },
  title: {
    size: 32,
    lineHeight: 48,
  },
  display: {
    size: 24,
    lineHeight: 36,
  },
  large: {
    size: 20,
    lineHeight: 32,
  },
  bodyCopy: {
    size: 16,
    lineHeight: 24,
  },
  small: {
    size: 12,
    lineHeight: 20,
  },
}

const Statement = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.medium};
  font-size: ${pxToRem(TextStyles.statement.size)};
  line-height: ${TextStyles.statement.lineHeight / TextStyles.statement.size};
`

const Title = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.title.size)};
  line-height: ${TextStyles.title.lineHeight / TextStyles.title.size};
`

const Display = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.display.size)};
  line-height: ${TextStyles.display.lineHeight / TextStyles.display.size};
`

const Large = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.large.size)};
  line-height: ${TextStyles.large.lineHeight / TextStyles.large.size};
`

const BodyCopy = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.bodyCopy.size)};
  line-height: ${TextStyles.bodyCopy.lineHeight / TextStyles.bodyCopy.size};
`

const Small = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.small.size)};
  line-height: ${TextStyles.small.lineHeight / TextStyles.small.size};
`

const TextLink = css`
  font-family: inherit;
  font-weight: inherit;
  text-transform: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: ${Color.primary.base};
  cursor: pointer;
`

const TextStyle = {
  Statement,
  Title,
  Display,
  Large,
  BodyCopy,
  Small,
  TextLink,
}

export { TextStyles, TextStyle }
