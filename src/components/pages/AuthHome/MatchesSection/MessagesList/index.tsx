import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MessagesListProps {
  matchsWithMessage: IMatch[]
}

export const MessagesList = ({ matchsWithMessage }: MessagesListProps) => {
  if (!matchsWithMessage.length) return <h1 className='text-text'>Opa, ninguém aqui meu chefe</h1>

  return (
    <section className='flex flex-col gap-xmd mt-lg'>
      {matchsWithMessage.map(({ matchedUser, messages, id }) => {
        return (
          <Link
            key={id}
            href={`/messages/${id}`}
            className='flex rounded-3xl'
          >

            <Image
              src={matchedUser.avatarUrl!}
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
