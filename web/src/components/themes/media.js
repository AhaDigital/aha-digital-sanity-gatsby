import { css } from 'styled-components'

export const sizes = {
  sm: 375,
  md: 720,
  lg: 1024,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
