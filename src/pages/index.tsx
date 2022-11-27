import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { HeroSection } from '@components/pages/Home/HeroSection'
import { getCookies } from '@core/helpers/parseCookies'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Codojo | Faça seu login</title>
      </Head>

      <HeroSection/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const cookieValue = getCookies(ctx.req.headers)

  if (cookieValue) {
    return {
      redirect: {
        destination: '/home'
      }
    }
  }
  return { props: {} }
}
