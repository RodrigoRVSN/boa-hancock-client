import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home (): JSX.Element {
  const { push } = useRouter()

  const loginGithub = async () => {
    push('http://localhost:4444/auth/')
  }

  const fetchProfile = async () => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('@bh_access_token='))
      ?.split('=')[1]

    const res = await fetch('http://localhost:4444/user/profile', {
      headers: {
        Authorization: `Bearer ${cookie}`
      }
    })
    console.log(await res.json())
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>app</h1>
      <button onClick={loginGithub}>Entrar com github</button>
    </>
  )
}
