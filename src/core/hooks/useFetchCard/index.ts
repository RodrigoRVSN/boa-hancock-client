import { useEffect, useState } from 'react'
import { LIKE_OR_DISLIKE } from '@core/hooks/useFetchCard/useFetchCard.types'
import { IUser } from '@core/types/IUser'
import UserService from '@services/UserService/UserService'

export const useFetchCard = () => {
  const [userCard, setUserCard] = useState({} as IUser)
  const [isError, setIsError] = useState(false)
  const [matchedUser, setMatchedUser] = useState({} as IUser)
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchRandomUser = async () => {
    try {
      setIsLoading(true)
      const data = await UserService.getRandomUser()

      setUserCard(data)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLikeOrDislikeAUser = async (action: LIKE_OR_DISLIKE) => {
    const { isMatch, matchId } = await UserService.likeOrDislikeUser(action, userCard.id)

    if (isMatch) {
      setIsMatchModalOpen(true)
      setMatchedUser({ ...userCard, matchId })
    }

    setUserCard({} as IUser)
    fetchRandomUser()
  }

  const handleCloseMatchModal = () => {
    setIsMatchModalOpen(false)
  }

  useEffect(() => {
    fetchRandomUser()
  }, [])

  return {
    isLoading,
    isError,
    userCard,
    handleLikeOrDislikeAUser,
    matchedUser,
    handleCloseMatchModal,
    isMatchModalOpen
  }
}
