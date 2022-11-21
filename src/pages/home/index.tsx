import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@core/store/hooks'

export default function Home () {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const fetchProfile = async () => {
    const accessToken = getCookies(document)

    const response = await fetch('http://localhost:4444/user/profile', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const userInfo = await response.json()
    dispatch(setUser(userInfo))
  }

  console.log(user)
  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <h1>home</h1>
  )
}
