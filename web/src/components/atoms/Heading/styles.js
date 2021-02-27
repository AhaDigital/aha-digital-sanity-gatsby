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

const H1 = styled.h1`
  ${defaultStyles('h1')}
  ${({styles}) => styles && css`${styles}`}
`
const H2 = styled.h2`
  ${defaultStyles('h2')}
  ${({styles}) => styles && css`${styles}`}
`
const H3 = styled.h3`
  ${defaultStyles('h3')}
  ${({styles}) => styles && css`${styles}`}
`
const H4 = styled.h4`
  ${defaultStyles('h4')}
  ${({styles}) => styles && css`${styles}`}
`

const HeadingElement = styled.h1`
  ${({styles, displayAs}) => styles && css`
    ${defaultStyles(displayAs || 'h1')}
    ${styles}
  `}
`

export {H1, H2, H3, H4, HeadingElement}

