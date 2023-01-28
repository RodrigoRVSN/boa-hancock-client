import { useRouter } from 'next/router'
import { GithubLogo } from 'phosphor-react'

export const ButtonLogin = () => {
  const { push } = useRouter()

  const handleLoginWithGithub = async () => {
    await push(`${process.env.NEXT_PUBLIC_API_URL}/auth/`)
  }

  return (
    <button
      className='bg-text flex mx-auto md:mx-[0] rounded-xl p-md text-p1 transition duration-150 hover:bg-gray200'
      onClick={handleLoginWithGithub}
    >
      <GithubLogo className='mr-xs' size={24} />
      <p>Entrar com github</p>
    </button>
  )
}
