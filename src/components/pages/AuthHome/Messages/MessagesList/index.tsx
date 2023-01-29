import { MutableRefObject } from 'react'
import { useAppSelector } from '@core/store/hooks'
import { IMessage } from '@core/types/IMessage'
import styles from './styles.module.css'

interface MessagesListProps {
  messages: IMessage[]
  chatRef: MutableRefObject<HTMLDivElement>
}

export const MessagesList = ({ messages, chatRef }: MessagesListProps) => {
  const { user } = useAppSelector(state => state.user)

  return (
    <section className='flex flex-col gap-md h-[calc(100vh-30vh)] py-md overflow-y-auto'>
      {messages?.map(message =>
        <p
          key={message.id}
          className={`
            ${user.id === message.sender_id
              ? 'bg-primary ml-auto'
              : 'bg-secondary mr-auto'} 
            p-md rounded-xl max-w-[50vw] break-all
            text-text
            ${styles.fade_message}
          `}
        >
          {message.text}
        </p>
      )}

      <div ref={chatRef} />
    </section>
  )
}
