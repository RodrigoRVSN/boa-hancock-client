import Image from 'next/image'
import Link from 'next/link'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

export const MatchesSection = () => {
  const { matches } = useFetchMatches()

  return (
    <aside className='bg-black100 min-h-screen w-[40%] border-r-primary border-r-2 p-xxlg'>
      <UserSection/>

      <section className='mt-xlg text-text text-p5 grid grid-cols-2 gap-lg lg:grid-cols-3'>
        {matches.map(({ matched_user }) => (
          <Link href={`/messages/${matched_user.id}`} className='flex flex-col items-center'>

            <Image
              src={matched_user.avatar_url!}
              alt={`Foto de ${matched_user.name}`}
              width={128}
              height={128}
              className='rounded-full'
            />

            <span className='text-text text-p5'>{matched_user.login}</span>
          </Link>
        ))}
      </section>
    </aside>
  )
}
