import Image from 'next/image'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

export const MatchesSection = () => {
  const { matches } = useFetchMatches()

  return (
    <aside className='bg-black200'>
      <UserSection/>

      {matches.map(({ matched_user }) => (
        <>
          <Image
            src={matched_user.avatar_url!}
            alt={`Foto de ${matched_user.name}`}
            width={64}
            height={64}
          />
          <h1 className='text-text'>{matched_user.login}</h1>
        </>
      ))}
    </aside>
  )
}
