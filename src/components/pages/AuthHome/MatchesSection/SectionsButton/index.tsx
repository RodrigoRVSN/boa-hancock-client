import { Dispatch, SetStateAction } from 'react'
import { SECTIONS } from '@components/pages/AuthHome/MatchesSection/MatchesSections.data'

interface SectionsButtonProps {
  setSelectedList: Dispatch<SetStateAction<SECTIONS>>
  selectedList: SECTIONS
}

export const SectionsButton = ({ selectedList, setSelectedList }: SectionsButtonProps) => {
  const handleChangeSection = (section: SECTIONS) => {
    setSelectedList(section)
  }

  return (
    <aside className='flex gap-lg text-text mt-xlg mb-lg'>
      <button
        className={`border-b-2 border-${selectedList === SECTIONS.MATCHES ? 'primary' : 'black100'}`}
        onClick={() => handleChangeSection(SECTIONS.MATCHES)}
      >
        Pares
      </button>
      <button
        className={`border-b-2 border-${selectedList === SECTIONS.MESSAGES ? 'primary' : 'black100'}`}
        onClick={() => handleChangeSection(SECTIONS.MESSAGES)}
      >
        Mensagens
      </button>
    </aside>
  )
}
