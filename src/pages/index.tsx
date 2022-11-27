import Head from 'next/head'
import { HeroSection } from '@components/pages/Home/HeroSection'
import { withSSRGuest } from '@core/utils/withSSRGuest'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Codojo | Faça seu login</title>
      </Head>

      <HeroSection/>
    </>
  )
}

export const getServerSideProps = withSSRGuest({
  fn: async () => {
    return { props: {} }
  }
})
