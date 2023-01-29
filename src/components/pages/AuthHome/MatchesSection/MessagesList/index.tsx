import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@App/core/store/hooks'
import { IMatch } from '@core/types/IMatch'
import styles from './styles.module.css'

interface MessagesListProps {
  matchsWithMessage: IMatch[]
}

export const MessagesList = ({ matchsWithMessage }: MessagesListProps) => {
  const { user } = useAppSelector(state => state.user)

  if (!matchsWithMessage.length) return <h1 className='text-text'>Nenhuma mensagem ainda!</h1>

  return (
    <section className='flex flex-col gap-xmd mt-lg'>
      {matchsWithMessage.map(({ matchedUser, messages, id }) => {
        return (
          <Link
            key={id}
            href={`/messages/${id}`}
            className={`flex rounded-lg p-xs duration-200 hover:scale-105 ${styles.animate_bg}`}
          >

            <Image
              src={matchedUser.avatarUrl!}
              alt={`Foto de ${matchedUser.name}`}
              width={64}
              height={64}
              className='rounded-full'
            />

            <div className='flex flex-col ml-xs overflow-hidden'>
              <span className='text-text text-p5'>{matchedUser.login}</span>
              <span className='text-gray100 text-p5 truncate'>
                {messages[messages.length - 1].sender_id === user.id && 'Você: '}
                {messages[messages.length - 1].text}
              </span>
            </div>
          </Link>
        )
      })}
    </section>
  )
}
