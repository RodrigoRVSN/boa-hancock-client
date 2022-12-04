import Image from 'next/image'
import { Heart, X } from 'phosphor-react'
import { useFetchCard } from '@core/hooks/useFetchCard'

export const MatchCard = () => {
  const { userCard, isError } = useFetchCard()

  if (isError) {
    return (
      <h1 className='text-text'>Nenhum usuário encontrado!</h1>
    )
  }

  return (
    <div className='bg-gradient-to-t from-secondary to-primary p-xxs rounded-2xl '>
      <div className='rounded-2xl bg-black300 min-w-[300px] bg-gradient-to-t from-black to-gray100'>
        <Image
          src={userCard.avatarUrl}
          alt={`Foto de ${userCard.login}`}
          width={300}
          height={300}
          className='rounded-2xl'
        />

        <footer className='flex flex-col p-lg pt-xs text-text'>
          <h1 className='text-p1 font-bold'>{userCard.name}</h1>
          <p className='text-gray100 text-p5'>{userCard.login}</p>

          <div className='flex justify-between mt-lg'>
            <button className='rounded-full border-2 border-secondary'>
              <X size={32} weight="fill" className='text-secondary p-xs'/>
            </button>

            <button className='rounded-full border-2 border-primary'>
              <Heart size={32} weight="fill" className='text-primary p-xs'/>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
