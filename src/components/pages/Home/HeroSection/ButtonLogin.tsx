import { useRouter } from 'next/router'

export const ButtonLogin = () => {
  const { push } = useRouter()

  const handleLoginWithGithub = async () => {
    push('http://localhost:4444/auth/')
  }

  return (
    <button className='bg-text' onClick={handleLoginWithGithub}>Entrar com github</button>
  )
}
