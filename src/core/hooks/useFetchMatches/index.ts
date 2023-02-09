import { useEffect, useMemo, useState } from 'react'
import { IMatch } from '@core/types/IMatch'
import MatchesService from '@services/MatchesService/MatchesService'

export const useFetchMatches = () => {
  const [matches, setMatches] = useState<IMatch[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const matchsWithMessage = useMemo(() => {
    return matches.filter(({ messages }) => messages.length)
  }, [matches])

  const fetchMatches = async () => {
    const data = await MatchesService.getMatches()

    setMatches(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return { isLoading, matches, matchsWithMessage }
}
