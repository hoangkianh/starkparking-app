import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetTypography,
  transformerCompileClass,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      black: {
        DEFAULT: '#07070d'
      },
      lime: { DEFAULT: '#EDFE56' },
      gray: {
        DEFAULT: '#9ca3af'
      }
    }
  },
  presets: [presetUno(), presetWebFonts(), presetTypography()],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives()
  ]
})
