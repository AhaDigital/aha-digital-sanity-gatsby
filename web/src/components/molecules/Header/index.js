import React, { createRef, useEffect, useState } from 'react'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Icon from '../../atoms/Icon'
import AhaDigitalLogo from '../../atoms/ahaDigitalLogo'
import Button from '../../atoms/Button'
import MenuLinkButton from '../../atoms/MenuLinkButton'
import TransparentButton from '../../atoms/TransparentButton'
import Heading from '../../atoms/Heading'
import theme from '../../themes'
import { Wrapper, TopLevel, NavLevel, MobileSkipToContent } from './styles'

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
            icon={{symbol: 'arrowDown', animationDirection: 'bottom'}}
            ariaLabel="Hoppa över huvudmenyn"
            styles={skipToContentButtonOverrideStyle}
          />
        </TopLevel.SkipToContent>
        <TopLevel.Accessibility>
          <TransparentButton
            name="highContrast"
            onClick={() => onAddContrast()}
            text="Öka kontrast"
            icon={{symbol: addContrast ? 'eye' : 'eyeClosed'}}
            overrideStyles={`color: ${addContrast ? 'blue' : theme.palette.dark};`}
            addContrast={addContrast}
          />
          {/*
            <TransparentButton
              name="textToSpeach"
              onClick={() => onAddSpeach()}
              text="Talande webb"
              icon={{symbol: addSpeach ? 'ear' : 'earClosed'}}
              overrideStyles={`color: ${addSpeach ? (addContrast ? 'blue' : theme.palette.blue)  : theme.palette.dark};`}
              addContrast={addContrast}
            />
          */}
        </TopLevel.Accessibility>
      </TopLevel>
      <NavLevel>
        {breakpoints.sm && (
          <MobileSkipToContent>
            <Button
              ref={toContentRef}
              name="toContent"
              onClick={() => setToContentTriggered(true)}
              text="Till huvudinnehåll"
              icon={{symbol: 'arrowDown', animationDirection: 'bottom'}}
              ariaLabel="Hoppa över huvudmenyn"
              styles={skipToContentButtonOverrideStyle}
            />
          </MobileSkipToContent>
        )}
        <NavLevel.Link
          to='/'
          aria-label="Till startsidan - Aha Digital"
          state={{
            addContrast: addContrast,
            addSpeach: addSpeach
          }}
        >
          <AhaDigitalLogo isAnimated={foldHeader} />
        </NavLevel.Link>
        <NavLevel.MobileMenuButton
          name="menuButton"
          id="menuOpener"
          aria-controls="mainMenu"
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
          showNav={showNav}
        >
          {breakpoints.sm && (
            <Heading tagName="span" displayAs="h2" styles={mobileMenuHeadingOverrideStyle}>Webbplatsen</Heading>
          )}
          <nav>
            <ul role="menubar" aria-label="Huvudmeny">
              {breakpoints.sm && (
                <li role="none">
                  <MenuLinkButton
                    to={`/`}
                    activeClassName="navActive"
                    role="menuitem"
                    addContrast={addContrast}
                    showNav={showNav}
                  >
                    Startsida
                  </MenuLinkButton>
                </li>
              )}
              {
                menu.map(item => {
                  const { page: { title = null, id, slug = {}}} = item
                  const link = get(slug, 'current')
                  return link && title && (
                    <li key={id} role="none">
                      <MenuLinkButton
                        to={`/${link}/`}
                        activeClassName="navActive"
                        role="menuitem"
                        addContrast={addContrast}
                        showNav={showNav}
                      >
                        {title}
                      </MenuLinkButton>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          {breakpoints.sm && (
            <>
              <Heading tagName="span" displayAs="h2" styles={mobileMenuHeadingOverrideStyle}>Tillgänglighet</Heading>
              <ul>
                <li>
                  <TransparentButton
                    name="highContrastMobile"
                    onClick={() => onAddContrast()}
                    text={addContrast ? 'Ökad kontrast' : 'Öka kontrast'}
                    icon={{symbol: addContrast ? 'eye' : 'eyeClosed'}}
                    overrideStyles={`color: ${addContrast ? 'blue' : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                    ariaLabel="Öka eller återställ kontrast på webbplatsen"
                    ariaExpanded={addContrast}
                  />
                </li>
                {/* 
                  <li>
                    <TransparentButton
                      name="textToSpeachMobile"
                      onClick={() => onAddSpeach()}
                      text="Talande webb"
                      icon={{symbol: addSpeach ? 'ear' : 'earClosed'}}
                      overrideStyles={`color: ${addSpeach ? (addContrast ? 'blue' : theme.palette.blue) : theme.palette.dark}; ${accessibilityButtonOverrides}`}
                      ariaLabel="Slå på/av talande webb på webbplatsen"
                      ariaExpanded={addSpeach}
                    />
                  </li>
                 */}
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
