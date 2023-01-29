import Image from 'next/image'
import { Gear } from 'phosphor-react'
import { useAppSelector } from '@core/store/hooks'

export const UserSection = () => {
  const { user } = useAppSelector(state => state.user)

  return (
    <header className='flex justify-between items-center'>
      <div className='flex items-center gap-md'>
        <Image
          src={user.avatarUrl!}
          alt={`Foto de ${user.name}`}
          width={64}
          height={64}
          className='rounded-full'
        />

        <span className='text-text text-h4'>{user.name || user.login}</span>
      </div>

      <Gear className='mr-xs text-secondary' size={32} />
    </header>
  )
}
