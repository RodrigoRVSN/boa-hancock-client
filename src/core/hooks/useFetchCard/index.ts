import { useEffect, useState } from 'react'
import { IUser } from '@core/types/IUser'
import UserService from '@services/UserService/UserService'

export const useFetchCard = () => {
  const [userCard, setUserCard] = useState({} as IUser)
  const [isError, setIsError] = useState(false)

  const fetchRandomUser = async () => {
    try {
      const data = await UserService.getRandomUser()

      setUserCard(data)
    } catch {
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchRandomUser()
  }, [])

  return { isError, userCard }
}
