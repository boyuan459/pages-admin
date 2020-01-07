import { css } from 'styled-components'
import merge from 'lodash/merge'

const sizes = {
  desktop: 75,  // lg 1200
  laptop: 64,   // md 1024
  tablet: 48,   // sm 768
  phone: 30,    // xs 480
}

// iterate through the sizes and create a media template
const mediaObj = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support user
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label]
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {}
)

merge(mediaObj, {
  tabletOnly: (...args) => css`
    @media (min-width: ${sizes.tablet}em) and (max-width: ${sizes.laptop}em) {
      ${css(...args)}
    }
  `,
  tabletAbove: (...args) => css`
    @media (min-width: ${sizes.tablet}em) {
      ${css(...args)}
    }
  `,
  laptopOnly: (...args) => css`
    @media (min-width: ${sizes.laptop}em) and (max-width: ${sizes.desktop}em) {
      ${css(...args)};
    }
  `
})

merge(mediaObj, {
  hiddenPhone: () => css`
    ${mediaObj.phone`display: none;`}
  `
})

export const media = mediaObj
