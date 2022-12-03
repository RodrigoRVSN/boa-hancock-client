import { PaperPlaneRight } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

interface ChatSubmitProps {
  handleSendMessage: (text: string) => void
  handleSomeoneTyping: () => void
  userTyping: string
}

export const ChatSubmit = ({ handleSendMessage, handleSomeoneTyping, userTyping }: ChatSubmitProps) => {
  const [messageText, setMessageText] = useState('')

  const handleSubmitMessage = () => {
    setMessageText('')
    handleSendMessage(messageText)
  }

  const handleTypeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(event.target.value)
    handleSomeoneTyping()
  }

  return (
    <>
      <div className='mx-auto relative bg-gray100 rounded-full p-lg flex justify-between'>
        <p className='text-gray100 ml-xlg absolute top-[-24px]'>
          {userTyping && `${userTyping} esta digitando...`}
        </p>

        <textarea
          className='w-full bg-gray100 outline-none'
          onChange={handleTypeMessage}
          value={messageText}
        />

        <button onClick={handleSubmitMessage}>
          <PaperPlaneRight size={32}/>
        </button>
      </div>
    </>
  )
}
