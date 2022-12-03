import Image from 'next/image'
import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'
import { IUser } from '@core/types/IUser'

interface MatchedUserSectionProps {
  matchedUser: IUser
}

export const MatchedUserSection = ({ matchedUser }: MatchedUserSectionProps) => {
  const { back } = useRouter()

  if (!matchedUser) return null

  return (
    <header className='bg-black300 py-xlg'>

      <div className='flex max-w-7xl px-xxs mx-auto'>
        <button onClick={back}>
          <CaretLeft size={32} className='text-text'/>
        </button>

        <Image
          src={matchedUser.avatarUrl}
          alt={`Foto de ${matchedUser.login}`}
          width={64}
          height={64}
          className='mr-md rounded-full'
        />

        <span
          className='text-text font-bold'
        >
          {matchedUser.name || matchedUser.login}
        </span>
      </div>
    </header>
  )
}
