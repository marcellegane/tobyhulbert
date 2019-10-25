import { css } from 'styled-components'
import { Color } from './color'

const family = {
  brand: 'Poppins, Helvetica, Arial, sans-serif',
}

const weight = {
  normal: 400,
  medium: 500,
  bold: 700,
}

const size = {
  mega: '30px',
  jumbo: '30px',
  extraLarge: '24px',
  large: '20px',
  bodyCopy: '17px',
  small: '15px',
}

const lineHeight = {
  mega: '36px',
  jumbo: '36px',
  extraLarge: '33px',
  large: '28px',
  bodyCopy: '24px',
  small: '21px',
}

const Mega = css`
  font-family: ${family.brand};
  font-weight: bold;
  text-transform: none;
  font-size: ${size.mega};
  letter-spacing: normal;
  line-height: ${lineHeight.mega};
  color: ${Color.secondary.foreground};
`

const Jumbo = css`
  font-family: ${family.brand};
  font-weight: normal;
  text-transform: none;
  font-size: ${size.jumbo};
  letter-spacing: normal;
  line-height: ${lineHeight.jumbo};
  color: ${Color.foreground};
`

const ExtraLarge = css`
  font-family: ${family.brand};
  font-weight: normal;
  text-transform: none;
  font-size: ${size.extraLarge};
  letter-spacing: normal;
  line-height: ${lineHeight.extraLarge};
  color: ${Color.foreground};
`

const Large = css`
  font-family: ${family.brand};
  font-weight: normal;
  text-transform: none;
  font-size: ${size.large};
  letter-spacing: normal;
  line-height: ${lineHeight.large};
  color: ${Color.foreground};
`

const BodyCopy = css`
  font-family: ${family.brand};
  font-weight: normal;
  text-transform: none;
  font-size: ${size.bodyCopy};
  letter-spacing: normal;
  line-height: ${lineHeight.bodyCopy};
  color: ${Color.foreground};
`

const Small = css`
  font-family: ${family.brand};
  font-weight: normal;
  text-transform: none;
  font-size: ${size.small};
  letter-spacing: normal;
  line-height: ${lineHeight.bodyCopy};
  color: ${Color.foreground};
`

const TextLink = css`
  font-family: inherit;
  font-weight: inherit;
  text-transform: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: ${Color.primary.brand};
  cursor: pointer;
`

const style = {
  Mega,
  Jumbo,
  ExtraLarge,
  Large,
  BodyCopy,
  Small,
  TextLink,
}

const Font = {
  family,
  size,
  lineHeight,
  style,
  weight,
}

export { Font }
