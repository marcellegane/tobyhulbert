/* Button Base Config */
/* Define configurations for default button design */

import { Font } from './font'
import { Border } from './border'
import { Color } from './color'
import { Transition } from './transition'
import { Layout } from './layout'
import { pixelMultiplier } from '../tools/calculate'

const Button = {
  base: {
    borderRadius: '28px',
    borderWidth: '2px',
    borderStyle: Border.style,
    fontFamily: Font.family.brand,
    fontWeight: '600',
    textTransform: 'none',
    fontSize: Font.size.bodyCopy,
    letterSpacing: 'normal',
    lineHeight: 1,
    paddingHorizontal: pixelMultiplier(Layout.padding.default, 2),
    paddingVertical: pixelMultiplier(Layout.padding.default, 1),
    marginVertical: Layout.margin.default,
    transition: `all ${Transition.default}`,
  },
  brand: {
    background: Color.primary.brand,
    borderColor: Color.primary.brand,
    color: '#ffffff',
    psuedo: {
      background: Color.primary.accent,
      borderColor: Color.primary.accent,
      color: '#ffffff',
    },
    disabled: {
      color: '#ffffff',
      backgroundColor: Color.neutral,
      borderColor: Color.neutral,
    },
  },
  contrast: {
    background: '#ffffff',
    borderColor: Color.primary.brand,
    color: Color.primary.brand,
    psuedo: {
      background: Color.secondary.brandTint1,
      borderColor: Color.primary.accent,
      color: Color.primary.accent,
    },
    disabled: {
      color: Color.neutral,
      backgroundColor: '#ffffff',
      borderColor: Color.neutral,
    },
  },
  accent: {
    background: Color.primary.brand,
    borderColor: Color.primary.brand,
    color: '#ffffff',
    psuedo: {
      background: Color.primary.accent,
      borderColor: Color.primary.accent,
      color: '#ffffff',
    },
    disabled: {
      color: '#ffffff',
      backgroundColor: Color.neutral,
      borderColor: Color.neutral,
    },
  },
}

export { Button }
