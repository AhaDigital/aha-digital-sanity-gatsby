import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'
import Icon from '../../atoms/icon'
import Button from '../../atoms/Button'
import StyledHeader from './styles'

const Header = ({menu, onHideNav, onShowNav, toContentFocus, showNav, siteTitle}) => {
  const toContentRef = createRef()
  const [toContentTriggered, setToContentTriggered] = useState(false)

  useEffect(() => {
    if(typeof window !== 'undefined' && toContentTriggered && toContentRef) {
      toContentRef.current.blur()
      toContentFocus()
      setToContentTriggered(false)
    }
  }, [toContentTriggered])

  return (
    <StyledHeader>
      <div>
        <Button
          ref={toContentRef}
          name="toContent"
          onClick={() => setToContentTriggered(true)}
          text="Till huvudinnehåll"
          icon="arrow-down" 
          ariaLabel="Hoppa över huvudmenyn"
        />
        top menu
      </div>
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
    </StyledHeader>
  )
}

export default Header

Header.defaultProps = {
  menu: {},
}
