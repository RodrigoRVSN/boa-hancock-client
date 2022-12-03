import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MatchesListProps {
  matches: IMatch[]
}

export const MatchesList = ({ matches }: MatchesListProps) => {
  return (
    <section className='mt-xlg text-text text-p5 flex flex-wrap gap-md'>
      {matches.map(({ matchedUser }) => (
        <Link key={matchedUser.id} href={`/messages/${matchedUser.id}`} className='flex flex-col items-center'>

          <Image
            src={matchedUser.avatar_url!}
            alt={`Foto de ${matchedUser.name}`}
            width={128}
            height={128}
            className='rounded-full'
          />

          <span className='text-text text-p5'>{matchedUser.login}</span>
        </Link>
      ))}
    </section>
  )
}
