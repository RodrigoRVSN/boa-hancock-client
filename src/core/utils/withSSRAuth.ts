import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'

export function withSSRAuth<P extends { [key: string]: any }> (fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const accessToken = cookies.getValue(ACCESS_TOKEN, ctx.req.headers)

    if (!accessToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      cookies.destroyCookie(ctx.res, ACCESS_TOKEN)

      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
}
