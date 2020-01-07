import { createGlobalStyle } from 'styled-components'

import base from './base'
import hovers from './base/hovers'
import typography from './base/typography'
import variables from './variables'

export const theme = Object.assign({
  flexboxgrid: {
    gridSize: 12,
    outerMargin: 1,
    mediaQuery: 'only screen',
    container: {
      sm: '',
      md: 66,
      lg: 75,
    },
    breakpoints: {
      xs: 0,
      sm: 48, // 768
      md: 64, // 1024
      lg: 75, // 1200
    },
  },
}, variables)

export const GlobalStyles = createGlobalStyle`
  ${base}
  ${hovers}
  ${typography}
`
