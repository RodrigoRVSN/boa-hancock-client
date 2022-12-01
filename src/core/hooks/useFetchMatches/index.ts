import { useEffect, useState } from 'react'
import MatchesService from '@core/services/MatchesService/MatchesService'
import { IMatch } from '@core/types/IMatch'

export const useFetchMatches = () => {
  const [matches, setMatches] = useState<IMatch[]>([])

  const fetchMatches = async () => {
    const data = await MatchesService.getMatches()

    setMatches(data)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return { matches }
}
