import { css } from 'styled-components'
import { media } from 'styles/media'

const base = css`
  *, *:after, *.before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 15px;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colorAthensGrey};
    box-sizing: border-box;
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.unicaReg};
    font-size: 15px;
    margin: 0;
  }

  a, a:hover, a:focus, a:active {
    color: ${props => props.theme.brandPrimary};
    font-family: ${props => props.theme.unicaMed};
    outline: 0;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .hidden-lt-md {
    ${media.tablet`display: none !important;`}
  }
  .visible-xs, .hidden-gt-md {
    ${media.tabletAbove`display: none !important;`}
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0)
    border: 0;
  }
`

export default base
