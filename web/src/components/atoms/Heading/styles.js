import styled, {css} from 'styled-components'
import theme from '../../themes'

const defaultStyles = tagName => {

  return `
    font: ${theme.headings[`${tagName}Mobile`]};
    word-break: break-word;
    hyphens: auto;
    position: relative;
    color: ${theme.palette.dark};

    ${({theme}) => theme.media.md`
      font: ${theme.headings[tagName]};
    `}
  `
}

const HeadingElement = styled.h1`
  ${({styles, displayAs, addContrast, color}) => css`
    ${defaultStyles(displayAs || 'h1')}
    ${addContrast && css`
      color: ${theme.palette.darker};
    `}
    ${color && css`
      color: ${theme.palette[color]};
    `}
    ${styles && styles}
  `}
`

export default HeadingElement

