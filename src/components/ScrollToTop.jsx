import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathRef = useRef(pathname)
  const prevHashRef = useRef(hash)

  useEffect(() => {
    const isRouteChanged = prevPathRef.current !== pathname
    const isSameRouteHashChanged = !isRouteChanged && prevHashRef.current !== hash && hash

    prevPathRef.current = pathname
    prevHashRef.current = hash

    const originalBehavior = document.documentElement.style.scrollBehavior

    const instantScrollToTarget = () => {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          const yOffset = -70
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo(0, y)
        } else {
          window.scrollTo(0, 0)
        }
      } else {
        window.scrollTo(0, 0)
      }
      document.documentElement.style.scrollBehavior = originalBehavior
    }

    if (isRouteChanged) {
      document.documentElement.style.scrollBehavior = 'auto'
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(instantScrollToTarget)
      })
    } else if (isSameRouteHashChanged) {
      document.documentElement.style.scrollBehavior = 'smooth'
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          const yOffset = -70
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalBehavior
        }, 500)
      }, 10)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
