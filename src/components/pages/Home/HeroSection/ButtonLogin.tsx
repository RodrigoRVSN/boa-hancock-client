import { useRouter } from 'next/router'

export const ButtonLogin = () => {
  const { push } = useRouter()

  const handleLoginWithGithub = async () => {
    await push(`${process.env.NEXT_PUBLIC_API_URL}/auth/`)
  }

  return (
    <button className='bg-text' onClick={handleLoginWithGithub}>Entrar com github</button>
  )
}
