import { useState } from 'react'
import { UserSection } from '@components/pages/AuthHome/UserSection'
import { MatchesList } from '@components/pages/Home/MatchesSection/MatchesList'
import { SECTIONS } from '@components/pages/Home/MatchesSection/MatchesSections.data'
import { MessagesList } from '@components/pages/Home/MatchesSection/MessagesList'
import { useFetchMatches } from '@core/hooks/useFetchMatches'

export const MatchesSection = () => {
  const { matches } = useFetchMatches()
  const [selectedList, setSelectedList] = useState(SECTIONS.MESSAGES)

  const sectionsComponent = {
    [SECTIONS.MATCHES]: <MatchesList matches={matches}/>,
    [SECTIONS.MESSAGES]: <MessagesList matches={matches}/>
  }

  const List = () => sectionsComponent[selectedList]

  const handleChangeSection = (section: SECTIONS) => {
    setSelectedList(section)
  }

  return (
    <aside className='bg-black100 min-h-screen w-[40%] border-r-primary border-r-2 p-xxlg'>
      <UserSection/>

      <section className='mt-xlg text-text text-p5 flex flex-wrap gap-md'>
        <button onClick={() => handleChangeSection(SECTIONS.MATCHES)}>Matches</button>
        <button onClick={() => handleChangeSection(SECTIONS.MESSAGES)}>Messages</button>

        <List/>
      </section>
    </aside>
  )
}
