import Image from 'next/image'
import Link from 'next/link'
import { IMatch } from '@core/types/IMatch'

interface MatchesListProps {
  matches: IMatch[]
  isHorizontal?: boolean
}

export const MatchesList = ({ matches, isHorizontal }: MatchesListProps) => {
  if (!matches.length) return <h1 className='text-text'>Opa ninguem aqui</h1>

  return (
    <section className={`flex text-text text-p5  gap-md ${isHorizontal ? 'overflow-auto' : 'flex-wrap'}`}>
      {matches.map(({ matchedUser, id }) => (
        <Link key={id} href={`/messages/${id}`} className={'flex flex-col items-center hover:scale-105 duration-200'}>
          <Image
            src={matchedUser.avatarUrl!}
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
