import React, { createRef, useEffect, useState } from 'react'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Icon from '../../atoms/icon'
import Button from '../../atoms/Button'
import LinkButton from '../../atoms/LinkButton'
import TransparentButton from '../../atoms/TransparentButton'
import Heading from '../../atoms/Heading'
import theme from '../../themes'
import { Wrapper, TopLevel, NavLevel } from './styles'

const Header = ({menu, onHideNav, onShowNav, showNav, foldHeader, toContentFocus}) => {
  const toContentRef = createRef()
  const [toContentTriggered, setToContentTriggered] = useState(false)
  const [contrastTriggered, setContrastTriggered] = useState(false)
  const [speachTriggered, setSpeachTriggered] = useState(false)

  const breakpoints = useBreakpoint()

  useEffect(() => {
    if(typeof window !== 'undefined' && toContentTriggered && toContentRef) {
      toContentRef.current.blur()
      toContentFocus()
      setToContentTriggered(false)
    }
  }, [toContentTriggered])

  // On route change check body class and trigger setState.
  useEffect(() => {
    if(typeof document !== 'undefined') {
      if(document.body.classList.contains('addContrast')) {
        setContrastTriggered(true)
      }
      if(document.body.classList.contains('addSpeach')) {
        setSpeachTriggered(true)
      }
    }
  }, [])

  const contrastToBodySwitch = () => {
    if(typeof document !== 'undefined') {
      if(contrastTriggered) {
        document.body.classList.remove('addContrast')
        setContrastTriggered(!contrastTriggered)
      } else {
        document.body.classList.add('addContrast')
        setContrastTriggered(!contrastTriggered)
      }
    }
  }

  const speachToBodySwitch = () => {
    if(typeof document !== 'undefined') {
      if(speachTriggered) {
        document.body.classList.remove('addSpeach')
        setSpeachTriggered(!speachTriggered)
      } else {
        document.body.classList.add('addSpeach')
        setSpeachTriggered(!speachTriggered)
      }
    }
  }

  const mobileMenuHeadingOverrideStyle = `
    display: block;
    padding: ${theme.spacings.md} 0 ${theme.spacings.sm} 0;    
    color: ${theme.palette.pink};
    border-bottom: 1px solid ${theme.palette.pink};
  `

  const skipToContentButtonOverrideStyle = `
    &:focus, &:hover {
      background-color: ${theme.palette.blue};
    }
  `

  const menuItemOverrideStyle = `
    font: ${breakpoints.sm ? theme.headings.h3Mobile : theme.headings.h3};
    line-height: ${breakpoints.sm ? 'auto' : '60px'};
    max-height: inherit;

    &:hover, &:focus {
      background-color: transparent;
      color: ${theme.palette.blue};
    }

    ${breakpoints.sm ?`
      text-decoration: underline;
      justify-content: flex-start;
      padding-left: 0;
      transition-delay: 1s;
      transition: transform ${theme.animationTime.default} ease-in-out;
      transform: translateX(-10px);
      ${showNav && `
        transition-delay: ${theme.animationTime.default};
        transform: translateX(0);
      `}

      &:before {
        content: '';
        width: 28px;
        height: 2px;
        display: block;
        margin: 0 ${theme.spacings.md} 0 0;
      }
    ` : 'text-decoration: none;'};
  `

  const accessibilityButtonOverrides = `
    ${breakpoints.sm?`
      padding-left: 0;
      font: ${theme.headings.h3Mobile};
      transition: transform ${theme.animationTime.default} ease-in-out;
      transform: translateX(-10px);
      ${showNav && `
        transition-delay: ${theme.animationTime.longer};
        transform: translateX(0);
      `}
    `: ''};
  `

  return (
    <Wrapper foldHeader={foldHeader}>
      <TopLevel>
        <TopLevel.SkipToContent>
          <Button
            ref={toContentRef}
            name="toContent"
            onClick={() => setToContentTriggered(true)}
            text="Till huvudinnehåll"
            icon={{symbol: 'arrow-down', animationDirection: 'bottom'}}
            ariaLabel="Hoppa över huvudmenyn"
            styles={skipToContentButtonOverrideStyle}
          />
        </TopLevel.SkipToContent>
        <TopLevel.Accessibility>
          <TransparentButton
            name="highContrast"
            onClick={() => contrastToBodySwitch()}
            text="Öka kontrast"
            icon={{symbol: contrastTriggered ? 'eye' : 'eye-closed'}}
            styles={`color: ${contrastTriggered ? theme.palette.blue : theme.palette.dark};`}
          />
          <TransparentButton
            name="textToSpeach"
            onClick={() => speachToBodySwitch()}
            text="Talande webb"
            icon={{symbol: speachTriggered ? 'ear' : 'ear-closed'}}
            styles={`color: ${speachTriggered ? theme.palette.blue : theme.palette.dark};`}
          />
        </TopLevel.Accessibility>
      </TopLevel>
      <NavLevel>
        <NavLevel.Link to='/' aria-label="Till startsidan - Aha Digital">
          <Icon symbol="logo" isAnimated={foldHeader} />
        </NavLevel.Link>
        <NavLevel.MobileMenuButton
          name="menuButton"
          id="menuOpener"
          aria-controls="mainMenu"
          aria-label="Huvudmeny"
          onClick={showNav ? onHideNav : onShowNav}
          aria-expanded={showNav ? 'true' : 'false'}
        >
          {
            showNav ? (
              <Icon symbol='close'/>
            ) : (
              <Icon symbol='hamburger'/>
            )
          }
        </NavLevel.MobileMenuButton>
        <NavLevel.Nav
          id="mainMenu"
          aria-labelledby="menuOpener"
          aria-label="Huvudmeny"
          showNav={showNav}
        >
          {breakpoints.sm && (
            <Heading id="navTitle" tagName="span" displayAs="h3" styles={mobileMenuHeadingOverrideStyle}>Webbplatsen</Heading>
          )}
          <nav aria-describedby="navTitle">
            <ul role="menubar" aria-label="Huvudmeny">
              {breakpoints.sm && (
                <li role="none">
                  <LinkButton
                    to={`/`}
                    activeClassName="navActive"
                    role="menuitem"
                    styles={menuItemOverrideStyle}
                  >
                    Startsida
                  </LinkButton>
                </li>
              )}
              {
                menu.map(item => {
                  const { page: { title = null, id, slug = {}}} = item
                  const link = get(slug, 'current')
                  return link && title && (
                    <li key={id} role="none">
                      <LinkButton
                        to={`/${link}/`}
                        activeClassName="navActive"
                        role="menuitem"
                        styles={menuItemOverrideStyle}
                      >
                        {title}
                      </LinkButton>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          {breakpoints.sm && (
            <>
              <Heading id="accessibilityTitle" tagName="span" displayAs="h3" styles={mobileMenuHeadingOverrideStyle}>Tillgänglighet</Heading>
              <ul aria-describedby="accessibilityTitle">
                <li>
                  <TransparentButton
                    name="highContrastMobile"
                    onClick={() => contrastToBodySwitch()}
                    text={contrastTriggered ? 'Ökad kontrast' : 'Öka kontrast'}
                    icon={{symbol: contrastTriggered ? 'eye' : 'eye-closed'}}
                    styles={`color: ${contrastTriggered ? theme.palette.blue : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                    ariaLabel="Öka eller återställ kontrast på webbplatsen"
                    ariaExpanded={contrastTriggered}
                  />
                </li>
                <li>
                  <TransparentButton
                    name="textToSpeachMobile"
                    onClick={() => speachToBodySwitch()}
                    text="Talande webb"
                    icon={{symbol: speachTriggered ? 'ear' : 'ear-closed'}}
                    styles={`color: ${speachTriggered ? theme.palette.blue : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                    ariaLabel="Slå på/av talande webb på webbplatsen"
                    ariaExpanded={speachTriggered}
                  />
                </li>
              </ul>
            </>
          )}
        </NavLevel.Nav>
      </NavLevel>
    </Wrapper>
  )
}

export default Header

Header.defaultProps = {
  menu: {},
}
