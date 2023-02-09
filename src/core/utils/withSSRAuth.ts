import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'

export function withSSRAuth<P extends { [key: string]: unknown }> (fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const tokenByQuery = String(ctx.query.token)
    const accessToken = cookies.getValue(ACCESS_TOKEN, ctx.req.headers) || tokenByQuery

    if (tokenByQuery && tokenByQuery !== 'undefined') {
      cookies.setCookie(ctx.res, ACCESS_TOKEN, accessToken)

      return {
        redirect: {
          destination: '/home',
          permanent: false
        }
      }
    }

    if (!accessToken || accessToken === 'undefined') {
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
