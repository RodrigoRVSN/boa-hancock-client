import { fireEvent, render, screen } from '@testing-library/react'
import { vi, expect, it, describe } from 'vitest'
import { UserMock } from '@App/core/mocks/User.mock'
import { IUser } from '@App/core/types/IUser'
import { MatchedUserSection } from '.'

const mockedBack = vi.fn()

vi.mock('next/router', () => ({
  useRouter () {
    return {
      back: mockedBack
    }
  }
}))

describe('<MatchedUserSection />', () => {
  const setup = (userMock?: IUser) => {
    return render(
      <MatchedUserSection
        matchedUser={userMock as IUser}
      />
    )
  }

  describe('Render', () => {
    it('should be able to not render if have not a user', () => {
      setup()

      expect(screen.queryByText(UserMock.name)).toBeFalsy()
    })

    it('should be able to render the user info', () => {
      const { unmount } = setup(UserMock)

      expect(screen.getByText(UserMock.name)).toBeTruthy()
      expect(screen.getByAltText(`Foto de ${UserMock.login}`)).toBeTruthy()

      unmount()
    })
  })

  describe('Actions', () => {
    it('should be able to go back', () => {
      setup(UserMock)

      fireEvent.click(screen.getByTestId('matched-user-section__button--return'))
      expect(mockedBack).toHaveBeenCalled()
    })
  })
})
