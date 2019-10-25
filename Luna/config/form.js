/* Button Form Config */
/* Define configurations for default form design */

import { Border } from './border'
import { Color } from './color'
import { Font } from './font'
import { Layout } from './layout'
import { pixelMultiplier } from '../tools/calculate'

const Form = {
  base: {
    borderRadius: Border.radius,
    paddingVertical: `${pixelMultiplier(Layout.padding.default, 0.75)}`,
    paddingHorizontal: Layout.padding.default,
    marginVertical: Layout.margin.default,
    marginHorizontal: '0px',
    borderColor: Color.border,
    borderWidth: Border.width,
    borderStyle: Border.style,
    fontSize: '16px',
    fontFamily: Font.family.brand,
    color: Color.foreground,
    backgroundColor: Color.secondary.background,
    placeholderColor: Color.neutral,
  },
  validation: {
    error: {
      backgroundColor: '#ffffff',
      borderColor: Color.error.foreground,
      borderStyle: 'dashed',
      borderWidth: Border.width,
      color: Color.error.foreground,
    },
  },
  disabled: {
    backgroundColor: '#ffffff',
    borderColor: Color.neutral,
    color: Color.neutral,
  },
  focus: {
    borderColor: Color.foreground,
  },
}

export { Form }
