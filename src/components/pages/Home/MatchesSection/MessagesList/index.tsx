import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MessagesListProps {
  matches: IMatch[]
}

export const MessagesList = ({ matches }: MessagesListProps) => {
  return (
    <>
      {matches.map(({ matchedUser, messages }) => {
        if (messages.length === 0) return null

        return (
          <Link key={matchedUser.id} href={`/messages/${matchedUser.id}`} className='flex flex-col items-center'>

            <Image
              src={matchedUser.avatar_url!}
              alt={`Foto de ${matchedUser.name}`}
              width={128}
              height={128}
              className='rounded-full'
            />

            <span className='text-text text-p5'>{matchedUser.login}</span>
          </Link>
        )
      })}
    </>
  )
}
