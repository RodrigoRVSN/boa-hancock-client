import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getCookies } from '@core/helpers/parseCookies'

export default function Home (): JSX.Element {
  const { push } = useRouter()

  const handleLoginWithGithub = async () => {
    push('http://localhost:4444/auth/')
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>app</h1>
      <button onClick={handleLoginWithGithub}>Entrar com github</button>
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
