import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'

export function withSSRGuest<P extends { [key: string]: any }> (fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const accessToken = cookies.getValue(ACCESS_TOKEN, ctx.req.headers)

    if (accessToken) {
      return {
        redirect: {
          destination: '/home',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
