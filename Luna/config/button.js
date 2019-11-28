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
    background: Color.primary.contrast,
    borderColor: Color.primary.contrast,
    color: Color.primary.brand,
    psuedo: {
      background: Color.primary.brand,
      borderColor: Color.primary.contrast,
      color: Color.primary.contrast,
    },
    disabled: {
      color: Color.secondary.accent,
      backgroundColor: Color.primary.accent,
      borderColor: Color.primary.accent,
    },
  },
  contrast: {
    background: Color.primary.contrast,
    borderColor: Color.primary.contrast,
    color: Color.primary.brand,
    psuedo: {
      background: Color.primary.accent,
      borderColor: Color.primary.accent,
      color: Color.primary.contrast,
    },
    disabled: {
      color: Color.grey.light,
      backgroundColor: Color.border,
      borderColor: Color.border,
    },
  },
  accent: {
    background: Color.background,
    borderColor: Color.primary.brand,
    color: Color.primary.brand,
    psuedo: {
      background: Color.primary.brand,
      borderColor: Color.primary.brand,
      color: Color.background,
    },
    disabled: {
      color: Color.grey.light,
      backgroundColor: Color.border,
      borderColor: Color.border,
    },
  },
  alternative: {
    background: Color.primary.brand,
    borderColor: Color.primary.brand,
    color: Color.background,
    psuedo: {
      background: Color.primary.accent,
      borderColor: Color.primary.accent,
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
