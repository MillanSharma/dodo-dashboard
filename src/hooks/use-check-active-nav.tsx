import { useLocation } from 'react-router-dom'

export default function useCheckActiveNav() {
  const { pathname } = useLocation()

  const checkActiveNav = (nav: string) => {
    if (nav === '/') {
      return pathname === '/'
    }

    const pathArray = pathname.split('/').filter((item) => item !== '')
    const navArray = nav.split('/').filter((item) => item !== '')

    if (navArray.length > pathArray.length) {
      return false
    }

    return (
      navArray.every((navPart, index) => navPart === pathArray[index]) &&
      (navArray.length === pathArray.length ||
        pathArray[navArray.length] === undefined)
    )
  }

  return { checkActiveNav }
}
