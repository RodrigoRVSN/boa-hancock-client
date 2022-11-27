import Image from 'next/image'
import { useAppSelector } from '@core/store/hooks'

export const UserSection = () => {
  const { user } = useAppSelector(state => state.user)

  return (
    <>
      <Image
        src={user.avatar_url!}
        alt={`Foto de ${user.name}`}
        width={64}
        height={64}
      />
      <p>{user.name}</p>
    </>
  )
}
