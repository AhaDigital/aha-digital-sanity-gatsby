import React, { useRef, useState, useLayoutEffect } from 'react'
import Header from '../molecules/Header'
import {StaticQuery, graphql} from 'gatsby'
import { ThemeProvider } from 'styled-components'
import SEO from '../atoms/seo'
import theme from '../themes'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'

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

const Layout = ({pageSEO, children, onHideNav, onShowNav, showNav}) => {
  const mainRef = useRef(null)
  const [moveToMainFocus, setMoveToMainFocus] = useState(false)

  useLayoutEffect(() => {
    if(typeof window !== 'undefined' && moveToMainFocus) {
      mainRef.current.focus()
      setMoveToMainFocus(false)
    }
  }, [moveToMainFocus])

  return (
    <ThemeProvider theme={theme}>
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
  
          return (
            <>
              <Header menu={mainMenuPages} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} toContentFocus={() => setMoveToMainFocus(true)} />
              <SEO title={ogTitle || fallbackTitle} description={ogDescription || fallbackDescription} image={ogImageUrl || fallbackImageUrl} />
            </>
          )
        }}
      />
      <main ref={mainRef} tabIndex={-1}>
        {children}
      </main>
      <footer>
        &copy; {new Date().getFullYear()} ahadigital.se - Aha Digital AB
      </footer>
    </ThemeProvider>
  )
}

export default Layout
