import styled, {css} from 'styled-components'
import theme from '../../themes'

const defaultStyles = (tagName, color) => {

  return `
    font: ${theme.headings[`${tagName}Mobile`]};
    word-break: break-word;
    hyphens: auto;
    position: relative;
    color: ${color ? theme.palette[color] : theme.palette.dark};

    ${({theme}) => theme.media.md`
      font: ${theme.headings[tagName]};
    `}
  `
}

const HeadingElement = styled.h1`
  ${({styles, displayAs, addContrast, color}) => css`
    ${defaultStyles(displayAs || 'h1', color)}
    ${addContrast && css`
      color: ${theme.palette.darker};
    `}
    ${styles && styles}
  `}
`

export default HeadingElement

