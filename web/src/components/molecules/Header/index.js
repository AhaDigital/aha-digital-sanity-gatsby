import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Icon from '../../atoms/icon'
import Button from '../../atoms/Button'
import LinkButton from '../../atoms/LinkButton'
import TransparentButton from '../../atoms/TransparentButton'
import Grid from '../../molecules/Grid'
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
            styles={`&:focus, &:hover {background-color: ${theme.palette.blue};}`}
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
            <h3>Webbplatsen</h3>
          )}
          <nav>
            <ul role="menubar" aria-label="Huvudmeny">
              {
                menu.map(item => {
                  const { page: { title = null, id, slug = {}}} = item
                  const link = get(slug, 'current')
                  return link && title && (
                    <li key={id} role="none">
                      <LinkButton
                        to={`/${link}/`}
                        activeStyle={{ 
                          color: theme.palette.blue,
                          backgroundColor: theme.palette.light,
                        }}
                        role="menuitem"
                        styles={`
                          font: ${breakpoints.sm ? theme.headings.h3Mobile : theme.headings.h3};
                          text-decoration: none;
                          line-height: 60px;
                          max-height: inherit;
                          &:hover, &:focus {
                            background-color: transparent;
                            color: ${theme.palette.blue};
                          }
                        `}
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
              <h3>Tillgänglighet</h3>
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
