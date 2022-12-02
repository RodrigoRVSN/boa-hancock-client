import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MatchesListProps {
  matches: IMatch[]
}

export const MatchesList = ({ matches }: MatchesListProps) => {
  return (
    <>
      {matches.map(({ matched_user }) => (
        <Link key={matched_user.id} href={`/messages/${matched_user.id}`} className='flex flex-col items-center'>

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
    </>
  )
}
