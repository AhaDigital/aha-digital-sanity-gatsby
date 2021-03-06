import { css } from 'styled-components'

export const sizes = {
  sm: 375,
  md: 768,
  lg: 960,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
