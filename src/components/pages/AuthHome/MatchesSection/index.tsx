import { useState } from 'react'
import { MatchesList } from '@components/pages/AuthHome/MatchesSection/MatchesList'
import { SECTIONS } from '@components/pages/AuthHome/MatchesSection/MatchesSections.data'
import { MessagesList } from '@components/pages/AuthHome/MatchesSection/MessagesList'
import { SectionsButton } from '@components/pages/AuthHome/MatchesSection/SectionsButton'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

export const MatchesSection = () => {
  const { matches } = useFetchMatches()
  const [selectedList, setSelectedList] = useState(SECTIONS.MATCHES)

  const sectionsComponent = {
    [SECTIONS.MATCHES]: <MatchesList matches={matches}/>,
    [SECTIONS.MESSAGES]: <MessagesList matches={matches}/>
  }

  const List = () => sectionsComponent[selectedList]

  return (
    <aside className='bg-black100 min-h-screen w-[40%] border-r-primary border-r-2 p-xxlg'>
      <UserSection/>

      <SectionsButton
        setSelectedList={setSelectedList}
        selectedList={selectedList}
      />

      <List/>
    </aside>
  )
}
