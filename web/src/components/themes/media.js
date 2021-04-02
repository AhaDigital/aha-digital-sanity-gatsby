import { css } from 'styled-components'

export const sizes = {
  sm: 376,
  md: 721,
  lg: 1025,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
