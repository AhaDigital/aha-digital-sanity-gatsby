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

const Header = ({
  menu,
  onHideNav,
  onShowNav,
  showNav,
  foldHeader,
  toContentFocus,
  onAddContrast,
  onAddSpeach,
  addSpeach,
  addContrast
}) => {
  const toContentRef = createRef()
  const [toContentTriggered, setToContentTriggered] = useState(false)
  const breakpoints = useBreakpoint()

  useEffect(() => {
    if(typeof window !== 'undefined' && toContentTriggered && toContentRef) {
      toContentRef.current.blur()
      toContentFocus()
      setToContentTriggered(false)
    }
  }, [toContentTriggered])

  const mobileMenuHeadingOverrideStyle = `
    display: block;
    padding: ${theme.spacings.md} 0 ${theme.spacings.sm} 0;    
    color: ${addContrast ? 'black' : theme.palette.pink};
    border-bottom: 1px solid ${addContrast ? 'black' : theme.palette.pink};
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
    ${addContrast ? 'color: black;' : ''}

    &:hover, &:focus {
      background-color: transparent;
      color: ${addContrast ? 'blue' : theme.palette.blue};
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
    <Wrapper foldHeader={foldHeader} addContrast={addContrast}>
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
            onClick={() => onAddContrast()}
            text="Öka kontrast"
            icon={{symbol: addContrast ? 'eye' : 'eye-closed'}}
            styles={`color: ${addContrast ? 'blue' : theme.palette.dark};`}
            addContrast={addContrast}
          />
          <TransparentButton
            name="textToSpeach"
            onClick={() => onAddSpeach()}
            text="Talande webb"
            icon={{symbol: addSpeach ? 'ear' : 'ear-closed'}}
            styles={`color: ${addSpeach ? (addContrast ? 'blue' : theme.palette.blue)  : theme.palette.dark};`}
            addContrast={addContrast}
          />
        </TopLevel.Accessibility>
      </TopLevel>
      <NavLevel>
        <NavLevel.Link
          to='/'
          aria-label="Till startsidan - Aha Digital"
          state={{
            addContrast: addContrast,
            addSpeach: addSpeach
          }}
        >
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
                    state={{
                      addContrast: addContrast,
                      addSpeach: addSpeach
                    }}
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
                        state={{
                          addContrast: addContrast,
                          addSpeach: addSpeach
                        }}
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
                    onClick={() => onAddContrast()}
                    text={addContrast ? 'Ökad kontrast' : 'Öka kontrast'}
                    icon={{symbol: addContrast ? 'eye' : 'eye-closed'}}
                    styles={`color: ${addContrast ? 'blue' : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                    ariaLabel="Öka eller återställ kontrast på webbplatsen"
                    ariaExpanded={addContrast}
                  />
                </li>
                <li>
                  <TransparentButton
                    name="textToSpeachMobile"
                    onClick={() => onAddSpeach()}
                    text="Talande webb"
                    icon={{symbol: addSpeach ? 'ear' : 'ear-closed'}}
                    styles={`color: ${addSpeach ? (addContrast ? 'blue' : theme.palette.blue) : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                    ariaLabel="Slå på/av talande webb på webbplatsen"
                    ariaExpanded={addSpeach}
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
  addContrast: false,
}
