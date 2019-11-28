import { css } from 'styled-components'
import { Button } from '../../../config/button'
import { pxToRem } from '../../../tools/calculate'
import { Layout } from '../../../config/layout'

const ButtonBase = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(Button.base.paddingVertical)}
    ${pxToRem(Button.base.paddingHorizontal)};
  cursor: pointer;

  font-family: ${Button.base.fontFamily};
  font-weight: ${Button.base.fontWeight};
  text-transform: ${Button.base.textTransform};
  font-size: ${pxToRem(Button.base.fontSize)};
  letter-spacing: ${Button.base.letterSpacing};
  line-height: ${Button.base.lineHeight};
  text-align: center;
  text-decoration: none;

  border-width: ${pxToRem(Button.base.borderWidth)};
  border-style: ${Button.base.borderStyle};
  border-radius: ${pxToRem(Button.base.borderRadius)};

  transition: ${Button.base.transition};

  :hover,
  :focus,
  :active {
    outline: 0;
  }

  > * + * {
    margin-left: ${pxToRem(Layout.grid.unit, 0.5)};
  }
`

export { ButtonBase }
