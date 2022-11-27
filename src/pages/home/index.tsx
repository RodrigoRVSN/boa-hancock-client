import Image from 'next/image'
import { useEffect } from 'react'
import { getCookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@core/store/hooks'

export default function Home () {
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const fetchProfile = async () => {
    const accessToken = getCookies(document)

    const response = await fetch('http://localhost:4444/user/profile', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const userInfo = await response.json()
    dispatch(setUser(userInfo))
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <Image src={user.avatar_url!} alt='foto' height={200} width={200}/>
  )
}
