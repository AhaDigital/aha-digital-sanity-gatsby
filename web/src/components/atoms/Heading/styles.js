import styled, {css} from 'styled-components'
import theme from '../../themes'

const defaultStyles = (tagName, textColour) => {
  return `
    font: ${theme.headings[`${tagName}Mobile`]};
    word-break: break-word;
    hyphens: auto;
    position: relative;
    color: ${textColour ? theme.palette[textColour] : theme.palette.dark};
    margin: 0 0 ${theme.spacings.md};
  `
}

const HeadingElement = styled.h1`
  ${({styles, displayAs, addContrast, textColour}) => css`
    ${defaultStyles(displayAs || 'h1', textColour)}

    ${addContrast && css`
      color: ${theme.palette.darker};
    `}

    ${({theme, displayAs}) => displayAs && theme.media.md`
      font: ${theme.headings[displayAs]};
      margin: 0 0 ${theme.spacings.lg};
    `}

    ${styles && styles}
  `}
`

export default HeadingElement

