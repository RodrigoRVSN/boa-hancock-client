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
    <aside className='flex gap-lg text-text mt-xlg'>
      <button
        className={`${selectedList === SECTIONS.MATCHES && 'border-b-2 border-primary'}`}
        onClick={() => handleChangeSection(SECTIONS.MATCHES)}
      >
        Matches
      </button>
      <button
        className={`${selectedList === SECTIONS.MESSAGES && 'border-b-2 border-primary'}`}
        onClick={() => handleChangeSection(SECTIONS.MESSAGES)}
      >
        Messages
      </button>
    </aside>
  )
}
