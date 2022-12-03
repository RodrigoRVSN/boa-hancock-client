import { useEffect, useState } from 'react'
import { IMatch } from '@core/types/IMatch'
import MatchesService from '@services/MatchesService/MatchesService'

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
