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
  maxWidthSmall: '800px',
  maxWidth: '1280px',
  maxWidthLarge: '1920px',
  containerPadding: theme.spacings.md,
  columnGutter: theme.spacings.md,
}

theme.palette = {
  light: `rgb(${ahaLight})`,
  dark: `rgb(${ahaDark})`,
  darker: `rgb(${ahaDarker})`,
  pink: `rgb(${ahaPink})`,
  pinkAlpha: `rgba(${ahaPink}, 0.1)`,
  blue: `rgb(${ahaBlue})`,
  blueAlpha: `rgba(${ahaBlue}, 0.1)`,
  yellow: `rgb(${ahaYellow})`,
  yellowAlpha: `rgba(${ahaYellow}, 0.1)`,
  green: `rgb(${ahaGreen})`,
  greenAlpha: `rgba(${ahaGreen}, 0.1)`,
}

theme.headings = {
  h1: `40px/40px ${headingFont}`,
  h2: `28px/28px ${headingFont}`,
  h3: `22px/22px ${headingFont}`,
  h4: `16px/16px ${headingFont}`,
  h1Mobile: `28px/40px ${headingFont}`,
  h3Mobile: `26px/16px ${headingFont}`,
}

theme.texts = {
  sm: `15px/22px ${textFont}`,
  default: `18px/23px ${textFont}`,
  defaultMobile: `16px/20px ${textFont}`,
}

export default theme
