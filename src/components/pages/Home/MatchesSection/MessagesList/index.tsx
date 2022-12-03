import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MessagesListProps {
  matches: IMatch[]
}

export const MessagesList = ({ matches }: MessagesListProps) => {
  return (
    <section className='flex flex-col gap-xmd mt-lg'>
      {matches.map(({ matchedUser, messages }) => {
        if (messages.length === 0) return null

        return (
          <Link
            key={matchedUser.id}
            href={`/messages/${matchedUser.id}`}
            className='flex rounded-3xl'
          >

            <Image
              src={matchedUser.avatar_url!}
              alt={`Foto de ${matchedUser.name}`}
              width={64}
              height={64}
              className='rounded-full'
            />

            <div className='flex flex-col ml-xs'>
              <span className='text-text text-p5'>{matchedUser.login}</span>
              <span

                className='text-gray100 text-p5 break-all text-ellipsis'>{messages[messages.length - 1].text}</span>
            </div>
          </Link>
        )
      })}
    </section>
  )
}
