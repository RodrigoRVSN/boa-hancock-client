import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { getCookies } from '@core/helpers/parseCookies'
import { setUser } from '@core/store/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@core/store/hooks'
import { IUser } from '@core/types/IUser'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const accessToken = getCookies(ctx.req.headers)

  if (!accessToken) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  const response = await fetch('http://localhost:4444/user/profile', {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const userInfo = await response.json()

  if (userInfo) {
    return {
      props: {
        userInfo
      }
    }
  }

  return {
    redirect: {
      destination: '/'
    }
  }
}
