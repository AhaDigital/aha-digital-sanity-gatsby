import media, { sizes } from './media'

const ahaLight = '255, 255, 255'
const ahaDark = '86,86,86'
const ahaDarker = '0, 0, 0'
const ahaPink = '255, 77, 163'
const ahaBlue = '31, 105, 255'
const ahaYellow = '265, 238, 102'
const ahaGreen = '36, 129, 143'

const headingFont = `'Roboto Condensed', Arial Narrow, Avenir Next Condensed, Roboto, sans-serif`
const textFont = `'Source Serif Pro', Georgia, serif`

const theme = {}

theme.breakpoints = sizes

theme.media = media

theme.spacings = {
  sm: '5px',
  md: '10px',
  lg: '20px',
  xl: '40px',
  xxl: '80px',
}

theme.grid = {
  maxWidth: '1200px',
  containerPadding: theme.spacings.md,
  containerPaddingDesktop: theme.spacings.lg,
  columnGutter: theme.spacings.md,
}

theme.palette = {
  light: `rgb(${ahaLight})`,
  dark: `rgb(${ahaDark})`,
  darker: `rgb(${ahaDarker})`,
  pink: `rgb(${ahaPink})`,
  blue: `rgb(${ahaBlue})`,
  yellow: `rgb(${ahaYellow})`,
  green: `rgb(${ahaGreen})`,
  rawRgb: {
    dark: ahaDark,
    light: ahaLight,
    pink: ahaPink,
    blue: ahaBlue,
    yellow: ahaYellow,
    green: ahaGreen,
  }
}

theme.headings = {
  h1: `40px/40px ${headingFont}`,
  h2: `22px/22px ${headingFont}`,
  h3: `22px/22px ${headingFont}`,
  h4: `18px/20px ${headingFont}`,
  h5: `16px/20px ${headingFont}`,
  h1Mobile: `28px/1.2 ${headingFont}`,
  h2Mobile: `24px/1.2 ${headingFont}`,
  h3Mobile: `22px/22px ${headingFont}`,
  h4Mobile: `18px/20px ${headingFont}`,
  h5Mobile: `16px/20px ${headingFont}`,
  text: `18px/25px ${textFont}`,
  textMobile: `16px/23px ${textFont}`,
}

theme.texts = {
  sm: `15px/1.5 ${textFont}`,
  default: `18px/23px ${textFont}`,
  defaultMobile: `16px/20px ${textFont}`,
}

theme.visually = {
  hidden: `
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  `,
  visible: `
    width: auto;
    height: auto;
    clip: auto;
    overflow: auto;
    position: static;
    white-space: normal;
  `
}

theme.animationTime = {
  default: '0.2s',
  longer: '0.4s',
}

export default theme
