import { useEffect, useState } from 'react'
import { useResponsive } from '@App/core/hooks/useResponsive'
import { MatchesList } from '@components/pages/AuthHome/MatchesSection/MatchesList'
import { SECTIONS } from '@components/pages/AuthHome/MatchesSection/MatchesSections.data'
import { MessagesList } from '@components/pages/AuthHome/MatchesSection/MessagesList'
import { SectionsButton } from '@components/pages/AuthHome/MatchesSection/SectionsButton'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

export const MatchesSection = () => {
  const { matches } = useFetchMatches()
  const [selectedList, setSelectedList] = useState(SECTIONS.MATCHES)
  const { isDesktop } = useResponsive()

  const sectionsComponent = {
    [SECTIONS.MATCHES]: <MatchesList matches={matches} />,
    [SECTIONS.MESSAGES]: <MessagesList matches={matches} />
  }

  const List = () => sectionsComponent[selectedList]

  return (
    <aside className='bg-black100 h-xxxlg lg:min-h-screen w-full lg:w-[40%] border-r-primary border-r-2 p-md lg:p-xxlg'>
      <UserSection />

      {isDesktop && (
        <SectionsButton
          setSelectedList={setSelectedList}
          selectedList={selectedList}
        />
      )}

      <List />
    </aside>
  )
}
