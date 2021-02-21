import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'
import Icon from '../../atoms/icon'
import Button from '../../atoms/Button'
import TransparentButton from '../../atoms/TransparentButton'
import Grid from '../../molecules/Grid'
import theme from '../../themes'
import { Wrapper, TopLevel, SkipToContent, TopLevelAccessibility } from './styles'

const Header = ({menu, onHideNav, onShowNav, toContentFocus, showNav, siteTitle}) => {
  const toContentRef = createRef()
  const [toContentTriggered, setToContentTriggered] = useState(false)
  const [contrastTriggered, setContrastTriggered] = useState(false)
  const [speachTriggered, setSpeachTriggered] = useState(false)

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
    <Wrapper>
      <TopLevel>
        <SkipToContent>
          <Button
            ref={toContentRef}
            name="toContent"
            onClick={() => setToContentTriggered(true)}
            text="Till huvudinnehåll"
            icon={{symbol: 'arrow-down', animationDirection: 'bottom'}}
            ariaLabel="Hoppa över huvudmenyn"
          />
        </SkipToContent>
        <TopLevelAccessibility>
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
          </TopLevelAccessibility>
      </TopLevel>
      <div>
        <Link to='/'>{siteTitle}</Link>
        <nav aria-label="Huvudmeny">
          <ul role="menubar" aria-label="Huvudmeny">
            {
              menu.map(item => {
                const { page: { title = null, id, slug = {}}} = item
                const link = get(slug, 'current')
                return link && title && (
                  <li key={id} role="none">
                    <Link
                      to={`/${link}/`}
                      activeStyle={{ color: "red" }}
                      role="menuitem"
                      >
                        {title}
                      </Link>
                  </li>
                )
              })
            }
          </ul>
          <button onClick={showNav ? onHideNav : onShowNav}>
            {
              showNav ? (
                <Icon symbol='close'/>
              ) : (
                <Icon symbol='hamburger'/>
              )
            }
          </button>
        </nav>
      </div>
    </Wrapper>
  )
}

export default Header

Header.defaultProps = {
  menu: {},
}
