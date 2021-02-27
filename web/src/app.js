import React, {useState, useEffect} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import get from 'lodash.get'
import Layout from './components/organisms/layout'
import { debounce } from './lib/helpers'

const App = props => {
  const {location} = props
  const breakpoints = useBreakpoint()
  const [showNav, setShowNav] = useState(false)
  const [isUserTabbing, setisUserTabbing] = useState(false)
  const [contrastTriggered, setContrastTriggered] = useState(false)
  const [speachTriggered, setSpeachTriggered] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [desktopUnfoldedHeader, setDesktopUnfoldedHeader] = useState(false)

  const handleShowNav = () => {
    setShowNav(true)
  }

  const handleHideNav = () => {
    setShowNav(false)
  }

  const handleContrast = () => {
    setContrastTriggered(!contrastTriggered)
  }

  const handleSpeach = () => {
    setSpeachTriggered(!speachTriggered)
  }

  useEffect(() => {
    const addContrast = get(location, 'state.addContrast')
    const addSpeach = get(location, 'state.addSpeach')

    if(addContrast) {
      handleContrast()
    }

    if(addSpeach) {
      handleSpeach()
    }
  }, [location])

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
    if(typeof window !== 'undefined' && !breakpoints.sm) {
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
      onAddSpeach={handleSpeach}
      onAddContrast={handleContrast}
      addSpeach={speachTriggered}
      addContrast={contrastTriggered}
    />
  )
}

export default App
