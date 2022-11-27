import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { getCookies } from '@core/helpers/parseCookies'

export function withSSRGuest<P> (fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const accessToken = getCookies(ctx.req.headers)

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
