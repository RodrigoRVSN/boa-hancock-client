import { MutableRefObject } from 'react'
import { useAppSelector } from '@core/store/hooks'
import { IMessage } from '@core/types/IMessage'

interface MessagesListProps {
  messages: IMessage[]
  chatRef: MutableRefObject<any>
}

export const MessagesList = ({ messages, chatRef }: MessagesListProps) => {
  const { user } = useAppSelector(state => state.user)

  return (
    <section className='flex flex-col gap-md my-lg max-h-[calc(100vh-50vh)] overflow-y-auto'>
      {messages?.map(message =>
        <p
          className={
            `${user.id === message.sender_id ? 'bg-primary ml-auto' : 'bg-secondary mr-auto'} 
          p-md rounded-xl max-w-[50vw] break-all`}
          key={message.id}
        >
          {message.text}
        </p>
      )}

      <div ref={chatRef}/>
    </section>
  )
}
