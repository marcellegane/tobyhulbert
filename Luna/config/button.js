import { Font } from './font'
import { Border } from './border'
import { Color } from './color'
import { Layout } from './layout'

const Button = {
  base: {
    paddingHorizontal: Layout.grid.unit,
    paddingVertical: Layout.grid.unit * 0.75,
    marginVertical: Layout.grid.unit,
    fontFamily: Font.family.brand,
    fontWeight: Font.weight.bold,
    textTransform: 'none',
    fontSize: 16,
    letterSpacing: 'normal',
    lineHeight: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: Border.style,
    transition: 'all 0.3s ease',
  },
  brand: {
    background: Color.secondary.base,
    borderColor: Color.secondary.base,
    color: Color.primary.base,
    psuedo: {
      background: Color.primary.base,
      borderColor: Color.secondary.base,
      color: Color.secondary.base,
    },
    disabled: {
      color: Color.primary.light,
      backgroundColor: Color.primary.dark,
      borderColor: Color.primary.dark,
    },
  },
  contrast: {
    background: Color.secondary.base,
    borderColor: Color.secondary.base,
    color: Color.primary.base,
    psuedo: {
      background: Color.primary.dark,
      borderColor: Color.primary.dark,
      color: Color.secondary.base,
    },
    disabled: {
      color: Color.grey.light,
      backgroundColor: Color.border,
      borderColor: Color.border,
    },
  },
  accent: {
    background: Color.background,
    borderColor: Color.primary.base,
    color: Color.primary.base,
    psuedo: {
      background: Color.primary.base,
      borderColor: Color.primary.base,
      color: Color.background,
    },
    disabled: {
      color: Color.grey.light,
      backgroundColor: Color.border,
      borderColor: Color.border,
    },
  },
  alternative: {
    background: Color.primary.base,
    borderColor: Color.primary.base,
    color: Color.background,
    psuedo: {
      background: Color.primary.dark,
      borderColor: Color.primary.dark,
      color: Color.background,
    },
    disabled: {
      color: Color.grey.light,
      backgroundColor: Color.border,
      borderColor: Color.border,
    },
  },
}

export { Button }
