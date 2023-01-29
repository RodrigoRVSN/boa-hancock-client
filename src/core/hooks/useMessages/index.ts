import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from 'socket.io-client'
import { useAppSelector } from '@core/store/hooks'
import { IMessage } from '@core/types/IMessage'
import MessagesService, { IChatInfo } from '@services/MessagesService/MessagesService'

const socket = connect(process.env.NEXT_PUBLIC_API_URL!)

export const useMessages = () => {
  const { query } = useRouter()
  const [chatInfo, setChatInfo] = useState({} as IChatInfo)
  const { user } = useAppSelector(state => state.user)
  const chatRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  const [userTyping, setUserTyping] = useState('')

  const handleSendMessage = (text: string) => {
    socket.emit('sendMessage', {
      match_id: query.matchId,
      sender_id: user.id,
      text
    })
  }

  const handleReceivedMessages = (message: IMessage) => {
    setChatInfo(prevChatInfo => ({
      ...prevChatInfo,
      messages: [...prevChatInfo.messages, message]
    }))
  }

  const handleSomeoneTyping = () => {
    socket.emit('typing', user.name || user.login)
  }

  const fetchMessages = useCallback(async () => {
    const chatInfoByMatch = await MessagesService.getMessagesByMatchId(String(query.matchId))

    setChatInfo(chatInfoByMatch)
  }, [query.matchId])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    socket.on('typing', ({ name }) => {
      const isSameUser = name === user.name || name === user.login

      if (isSameUser || !name) return

      setUserTyping(name)

      timeout = setTimeout(() => setUserTyping(''), 3000)
    })

    return () => clearTimeout(timeout)
  }, [user.login, user.name])

  useEffect(() => {
    socket.on('receivedMessage', handleReceivedMessages)
  }, [])

  useEffect(() => {
    query.matchId && fetchMessages()
  }, [fetchMessages, query.matchId])

  useEffect(() => {
    chatRef.current!.scrollIntoView({ behavior: 'smooth' })
  }, [chatInfo])

  return { chatInfo, handleSendMessage, handleSomeoneTyping, userTyping, chatRef }
}
