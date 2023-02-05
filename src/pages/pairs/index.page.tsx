import Head from 'next/head'
import { Footer } from '@App/components/Footer'
import { withSSRAuth } from '@App/core/utils/withSSRAuth'
import { MatchesList } from '@components/pages/AuthHome/MatchesSection/MatchesList'
import { MessagesList } from '@components/pages/AuthHome/MatchesSection/MessagesList'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

const Pairs = () => {
  const { matches, matchsWithMessage } = useFetchMatches()

  return (
    <>
      <Head>
        <title>Codojo | Seus pares</title>
      </Head>

      <main
        className='bg-black200 min-h-screen p-lg lg:mb-xxxlg'
      >
        <section>
          <h1 className='font-bold text-text text-h4 mb-md'>Seus pares</h1>
          <MatchesList matches={matches} isHorizontal />
        </section>

        <section>
          <h1 className='font-bold text-text text-h4 mb-md mt-lg'>Mensagens</h1>
          <MessagesList matchsWithMessage={matchsWithMessage} />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Pairs

export const getServerSideProps = withSSRAuth(async () => {
  return { props: {} }
})
