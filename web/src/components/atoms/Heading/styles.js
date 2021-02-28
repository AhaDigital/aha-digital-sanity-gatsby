import styled, {css} from 'styled-components'
import theme from '../../themes'

const defaultStyles = tagName => {
  return `
    font: ${theme.headings[`${tagName}Mobile`]};
    word-break: break-word;
    hyphens: auto;
    position: relative;

    ${({theme}) => theme.media.md`
      font: ${theme.headings[tagName]};
    `}
  `
}

const HeadingElement = styled.h1`
  ${({styles, displayAs}) => css`
    ${defaultStyles(displayAs || 'h1')}
    ${styles && styles}
  `}
`

export default HeadingElement

