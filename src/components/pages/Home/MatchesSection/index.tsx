import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'
import { IUser } from '@core/types/IUser'

export const MatchesSection = () => {
  const [matches, setMatches] = useState<IUser[]>([])

  const fetchMatches = async () => {
    const accessToken = cookies.getValue(window.document, ACCESS_TOKEN)

    const response = await fetch('http://localhost:4444/matches', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const data = await response.json()
    setMatches(data)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

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
