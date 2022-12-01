import { useEffect } from 'react'
import { MatchesSection } from '@components/pages/Home/MatchesSection'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch } from '@core/store/hooks'
import { IUser } from '@core/types/IUser'
import { withSSRAuth } from '@core/utils/withSSRAuth'

export default function Home ({ userInfo }: { userInfo: IUser }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUser(userInfo))
  }, [])

  return (
    <MatchesSection/>
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
