import { useEffect, useState } from 'react'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'
import { IMatch } from '@core/types/IMatch'

export const useFetchMatches = () => {
  const [matches, setMatches] = useState<IMatch[]>([])

  const fetchMatches = async () => {
    const accessToken = cookies.getValue(window.document, ACCESS_TOKEN)

    const response = await fetch('http://localhost:4444/matches', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const data = await response.json()
    setMatches(data)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return { matches }
}
