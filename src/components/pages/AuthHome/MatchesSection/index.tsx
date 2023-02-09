import { useState } from 'react'
import { AvatarLoading } from '@App/components/AvatarLoading'
import { useResponsive } from '@App/core/hooks/useResponsive'
import { useFetchMatches } from '@core/hooks/useFetchMatches'
import { MatchesList } from './MatchesList'
import { SECTIONS } from './MatchesSections.data'
import { MessagesList } from './MessagesList'
import { SectionsButton } from './SectionsButton'
import { UserSection } from './UserSection'

export const MatchesSection = () => {
  const { isLoading, matches, matchsWithMessage } = useFetchMatches()
  const [selectedList, setSelectedList] = useState(SECTIONS.MATCHES)
  const { isDesktop } = useResponsive()

  const sectionsComponent = {
    [SECTIONS.MATCHES]: <MatchesList matches={matches} />,
    [SECTIONS.MESSAGES]: <MessagesList matchsWithMessage={matchsWithMessage} />
  }

  const List = () => sectionsComponent[selectedList]

  return (
    <aside className='bg-black100 h-xxxlg lg:min-h-screen overflow-auto w-full lg:w-[40%] border-r-primary lg:border-r-2 p-md lg:p-xxlg'>
      <UserSection />

      {isDesktop && (
        <>
          <SectionsButton
            setSelectedList={setSelectedList}
            selectedList={selectedList}
          />

          {isLoading
            ? <AvatarLoading numberOfLoaders={3} />
            : <List />
          }
        </>
      )}

    </aside>
  )
}
