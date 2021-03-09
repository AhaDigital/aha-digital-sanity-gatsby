import React, { useRef, useState, useEffect } from 'react'
import {StaticQuery, graphql} from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'
import SEO from '../atoms/seo'
import Header from '../molecules/Header'
import Hero from '../molecules/Hero'
import theme from '../themes'

const menuQuery = graphql`
  query DefaultMenu {
    seo: sanitySiteSettings {
      fallbackSEO {
        ogDescription
        ogTitle
        ogImage {
          asset {
            _id
          }
        }
      }
    }
    menu: sanitySiteSettings {
      mainMenu {
        mainMenuPages {
          page {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    box-sizing: border-box;
    position: relative;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a:focus, button:focus {
    outline: none;
  }

  .isTabbing {
    a:focus, button:focus, #menuOpener:focus {
      outline: 1px solid rgb(31,105,255);
    }
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  main {
    outline: none;
  }
`

const Layout = ({
  pageSEO,
  children,
  onHideNav,
  onShowNav,
  showNav,
  foldHeader,
  onAddContrast,
  onAddSpeach,
  addSpeach,
  addContrast,
  location,
  hero
}) => {
  const mainRef = useRef(null)
  const [moveToMainFocus, setMoveToMainFocus] = useState(false)

  useEffect(() => {
    if(typeof window !== 'undefined' && moveToMainFocus) {
      mainRef.current.focus()
      setMoveToMainFocus(false)
    }
  }, [moveToMainFocus])
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StaticQuery
        query={menuQuery}
        render={data => {
          const {
            menu: { mainMenu: { mainMenuPages = {}} = {}} = {},
            seo: { fallbackSEO: fallback = {}} = {}
          } = data
  
          const { ogTitle, ogDescription, ogImage } = pageSEO
  
          const { ogTitle: fallbackTitle, ogDescription: fallbackDescription, ogImage: fallbackImage } = fallback
  
          const ogImageUrl = (ogImage && ogImage.asset) ? imageUrlFor(buildImageObj(ogImage)).width(1200).url() : null
          const fallbackImageUrl = (fallbackImage && fallbackImage.asset) ? imageUrlFor(buildImageObj(fallbackImage)).width(1200).url() : null
  
          const childrenWithProps = React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { addContrast: addContrast });
            }
            return child;
          });

          return (
            <>
              <SEO title={ogTitle || fallbackTitle} description={ogDescription || fallbackDescription} image={ogImageUrl || fallbackImageUrl} />
              <Header
                menu={mainMenuPages}
                onHideNav={onHideNav}
                onShowNav={onShowNav}
                showNav={showNav}
                foldHeader={foldHeader}
                toContentFocus={() => setMoveToMainFocus(true)}
                onAddContrast={onAddContrast}
                onAddSpeach={onAddSpeach}
                addSpeach={addSpeach}
                addContrast={addContrast}
              />
              <Hero hero={hero} addContrast={addContrast} />
              <main ref={mainRef} tabIndex={-1}>
                {childrenWithProps}
              </main>
              <footer>
                &copy; {new Date().getFullYear()} ahadigital.se - Aha Digital AB
              </footer>
            </>
          )
        }}
      />
    </ThemeProvider>
  )
}

export default Layout
