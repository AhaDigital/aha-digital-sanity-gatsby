import React from 'react'
import Header from './header'
import { ThemeProvider } from 'styled-components'
import theme from '../themes'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <ThemeProvider theme={theme}>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    {children}
    <footer>
      &copy; {new Date().getFullYear()} ahadigital.se - Aha Digital AB
    </footer>
  </ThemeProvider>
)

export default Layout
