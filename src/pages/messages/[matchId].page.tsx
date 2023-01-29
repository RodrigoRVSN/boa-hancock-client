import Head from 'next/head'
import { ChatSubmit } from '@components/pages/Messages/ChatSubmit'
import { List } from '@components/pages/Messages/List'
import { MatchedUserSection } from '@components/pages/Messages/MatchedUserSection'
import { useMessages } from '@core/hooks/useMessages'
import { withSSRAuth } from '@core/utils/withSSRAuth'

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
          <List messages={chatInfo.messages} chatRef={chatRef} />

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
