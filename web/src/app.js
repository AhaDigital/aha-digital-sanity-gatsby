import React, {useState, useEffect} from 'react'
import Layout from './components/organisms/layout'
import { debounce } from './lib/helpers'

const App = props => {
  const [showNav, setShowNav] = useState(false)
  const [isUserTabbing, setisUserTabbing] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [desktopUnfoldedHeader, setDesktopUnfoldedHeader] = useState(false)

  const handleShowNav = () => {
    setShowNav(true)
  }

  const handleHideNav = () => {
    setShowNav(false)
  }

  useEffect(() => {
    if(typeof document !== 'undefined' && !isUserTabbing) {
      document.addEventListener('keyup', (event) => {
        if (event.key === 'Tab') {
          document.body.classList.add('isTabbing')
          setisUserTabbing(true)
        }
      })
    }
  }, [isUserTabbing])


  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setDesktopUnfoldedHeader((currentScrollPos > 150) && (currentScrollPos > prevScrollPos))
    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

  }, [prevScrollPos, desktopUnfoldedHeader, handleScroll]);

  return (
    <Layout
      {...props}
      showNav={showNav}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
      foldHeader={desktopUnfoldedHeader}
    />
  )
}

export default App
