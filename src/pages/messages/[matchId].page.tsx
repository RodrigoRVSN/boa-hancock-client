import Head from 'next/head'
import { ChatSubmit } from '@components/pages/AuthHome/Messages/ChatSubmit'
import { MatchedUserSection } from '@components/pages/AuthHome/Messages/MatchedUserSection'
import { MessagesList } from '@components/pages/AuthHome/Messages/MessagesList'
import { withSSRAuth } from '@core/utils/withSSRAuth'
import { useMessages } from '@pages/messages/useMessages'

export default function Message () {
  const { chatInfo, handleSomeoneTyping, handleSendMessage, userTyping, chatRef } = useMessages()

  return (
    <>
      <Head>
        <title>Codojo | {chatInfo?.match?.matchedUser?.login}</title>
      </Head>

      <div className='bg-black200 min-h-screen'>
        <MatchedUserSection matchedUser={chatInfo?.match?.matchedUser} />

        <main className='max-w-5xl mx-auto px-xs'>
          <MessagesList messages={chatInfo.messages} chatRef={chatRef} />

          <ChatSubmit
            handleSendMessage={handleSendMessage}
            handleSomeoneTyping={handleSomeoneTyping}
            userTyping={userTyping}
          />
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
