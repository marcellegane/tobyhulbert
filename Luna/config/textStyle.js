import { css } from 'styled-components'
import { Font } from './font'
import { Color } from './color'
import { pxToRem } from '../tools/calculate'

const styles = {
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
  font-size: ${pxToRem(styles.statement.size)};
  line-height: ${styles.statement.lineHeight / styles.statement.size};
`

const Title = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(styles.title.size)};
  line-height: ${styles.title.lineHeight / styles.title.size};
`

const Display = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(styles.display.size)};
  line-height: ${styles.display.lineHeight / styles.display.size};
`

const Large = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(styles.large.size)};
  line-height: ${styles.large.lineHeight / styles.large.size};
`

const BodyCopy = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(styles.bodyCopy.size)};
  line-height: ${styles.bodyCopy.lineHeight / styles.bodyCopy.size};
`

const Small = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(styles.small.size)};
  line-height: ${styles.small.lineHeight / styles.small.size};
`

const TextLink = css`
  font-family: inherit;
  font-weight: inherit;
  text-transform: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: ${Color.primary.brand};
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

export { TextStyle }
