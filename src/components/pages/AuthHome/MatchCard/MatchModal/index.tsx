import Image from 'next/image'
import { useRouter } from 'next/router'
import { IUser } from '@core/types/IUser'

interface MatchModalProps {
  matchedUser: IUser
  onCloseModal: () => void
}

export const MatchModal = ({ matchedUser, onCloseModal }: MatchModalProps) => {
  const { push } = useRouter()

  const handleRedirectToChat = () => {
    push(`messages/${matchedUser.matchId}`)
  }

  return (
    <div
      className="justify-center items-center flex flex-col absolute top-[0] left-[0] h-screen w-screen bg-black200 gap-xmd"
    >
      <Image
        src={matchedUser.avatarUrl}
        alt={`Foto de ${matchedUser.login}`}
        width={128}
        height={128}
        className='rounded-2xl'
      />

      <h1 className='text-text text-h1'>Match!</h1>

      <button
        className="bg-primary text-text rounded-lg py-md min-w-[200px]"
        type="button"
        onClick={handleRedirectToChat}
      >
        Chamar para codar
      </button>
      <button
        className="bg-text text-primary rounded-lg py-md min-w-[200px]"
        type="button"
        onClick={onCloseModal}
      >
        Chamar depois
      </button>
    </div>
  )
}
