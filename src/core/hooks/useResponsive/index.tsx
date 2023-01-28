import { useEffect, useState } from 'react'

const DESKTOP_SIZE = 980

export const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  const verifyScreen = () => {
    if (window.innerWidth > DESKTOP_SIZE) {
      return setIsDesktop(true)
    }
    return setIsDesktop(false)
  }

  useEffect(() => {
    verifyScreen()

    window.addEventListener('resize', verifyScreen)

    return () => window.removeEventListener('resize', verifyScreen)
  }, [])

  return { isDesktop }
}
