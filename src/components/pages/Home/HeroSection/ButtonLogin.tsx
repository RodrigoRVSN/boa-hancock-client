import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'

export const ButtonLogin = () => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URL}/auth/`}
      className='bg-text flex mx-auto md:mx-[0] rounded-xl p-md text-p1 transition duration-150 hover:bg-gray100 items-center w-fit'
    >
      <GithubLogo className='mr-xs' size={24} />
      <p>Entrar com Github</p>
    </Link>
  )
}
