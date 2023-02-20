import { PaperPlaneRight } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface ChatSubmitProps {
  handleSendMessage: (text: string) => void
  handleSomeoneTyping: () => void
  userTyping: string
}

export const ChatSubmit = ({ handleSendMessage, handleSomeoneTyping, userTyping }: ChatSubmitProps) => {
  const [messageText, setMessageText] = useState('')

  const handleTypeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(event.target.value)
    handleSomeoneTyping()
  }

  const handleSubmitMessage = (event: FormEvent) => {
    event.preventDefault()

    setMessageText('')
    handleSendMessage(messageText)
  }

  return (
    <>
      <form onSubmit={handleSubmitMessage} className='mx-auto relative bg-gray100 rounded-full p-xs flex justify-between mt-xs'>
        <p className='text-gray100 ml-xlg absolute top-[-24px]'>
          {userTyping && `${userTyping} está digitando...`}
        </p>

        <textarea
          className='w-full bg-gray100 outline-none m-xxs resize-none'
          onChange={handleTypeMessage}
          value={messageText}
          placeholder='Digite algo'
          data-testid='chat-submit__textarea--message'
        />

        <button
          aria-label='Enviar mensagem'
          type='submit'
          disabled={!messageText.length}
          data-testid='chat-submit__button--submit'
        >
          <PaperPlaneRight size={32} />
        </button>
      </form>
    </>
  )
}
