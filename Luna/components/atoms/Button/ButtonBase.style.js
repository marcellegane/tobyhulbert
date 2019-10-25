import { css } from 'styled-components'
import { Button } from '../../../config/button'

const ButtonBase = css`
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  box-sizing: border-box;
  border-width: ${Button.base.borderWidth};
  border-style: ${Button.base.borderStyle};
  border-radius: ${Button.base.borderRadius};
  font-family: ${Button.base.fontFamily};
  font-weight: ${Button.base.fontWeight};
  text-transform: ${Button.base.textTransform};
  font-size: ${Button.base.fontSize};
  letter-spacing: ${Button.base.letterSpacing};
  line-height: ${Button.base.lineHeight};
  padding-left: ${Button.base.paddingHorizontal};
  padding-right: ${Button.base.paddingHorizontal};
  padding-top: ${Button.base.paddingVertical};
  padding-bottom: ${Button.base.paddingVertical};
  transition: ${Button.base.transition};

  :hover,
  :focus,
  :active {
    outline: 0;
  }
`

export { ButtonBase }
