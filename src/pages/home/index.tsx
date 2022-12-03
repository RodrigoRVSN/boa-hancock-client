import Head from 'next/head'
import { useEffect } from 'react'
import { MatchesSection } from '@components/pages/Home/MatchesSection'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch } from '@core/store/hooks'
import { IUser } from '@core/types/IUser'
import { withSSRAuth } from '@core/utils/withSSRAuth'
import UsersMapper from '@services/UserService/mappers/UsersMapper'

export default function Home ({ userData }: { userData: IUser }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUser(userData))
  }, [])

  return (
    <>
      <Head>
        <title>Codojo | Inicio</title>
      </Head>

      <main className='bg-black200 min-h-screen'>
        <MatchesSection/>
      </main>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const accessToken = cookies.getValue(ACCESS_TOKEN, ctx.req.headers)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const userInfo = await response.json()

  const userData = UsersMapper.toDomain(userInfo)

  return { props: { userData } }
})
