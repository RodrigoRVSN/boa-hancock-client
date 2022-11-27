import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'

export function withSSRAuth<P> (fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const accessToken = cookies.getValue(ctx.req.headers, ACCESS_TOKEN)

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
      cookies.destroyCookie(ctx.req.headers, ACCESS_TOKEN)

      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
}
