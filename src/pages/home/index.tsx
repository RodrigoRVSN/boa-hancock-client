import Image from 'next/image'
import { useEffect } from 'react'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@core/store/hooks'
import { IUser } from '@core/types/IUser'
import { withSSRAuth } from '@core/utils/withSSRAuth'

export default function Home ({ userInfo }: { userInfo: IUser }) {
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUser(userInfo))
  }, [])

  return (
    <Image src={user.avatar_url!} alt='foto' height={200} width={200}/>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const accessToken = cookies.getValue(ctx.req.headers, ACCESS_TOKEN)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const userInfo = await response.json()

  return { props: { userInfo } }
})
