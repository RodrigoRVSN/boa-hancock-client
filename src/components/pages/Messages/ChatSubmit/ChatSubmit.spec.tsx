import { fireEvent, render, screen } from '@testing-library/react'
import { vi, expect, it, describe } from 'vitest'
import { ChatSubmit } from '.'

const sendMessageMock = vi.fn()
const someoneTypingMock = vi.fn()

describe('<ChatSubmit />', () => {
  const setup = (userTyping = '') => {
    return render(
      <ChatSubmit
        handleSendMessage={sendMessageMock}
        handleSomeoneTyping={someoneTypingMock}
        userTyping={userTyping}
      />
    )
  }

  describe('Render', () => {
    it('should not be able to render who is typing text if have no one typing', () => {
      setup()

      expect(screen.queryByText('está digitando...')).toBeFalsy()
    })

    it('should be able to render who is typing', () => {
      setup('John Doe')

      expect(screen.getByText('John Doe está digitando...')).toBeTruthy()
    })
  })

  describe('Actions', () => {
    it('should be type and send a message', () => {
      setup()

      fireEvent.change(screen.getByTestId('chat-submit__textarea--message'), { target: { value: 'bah tche' } })

      expect(someoneTypingMock).toHaveBeenCalled()

      fireEvent.click(screen.getByTestId('chat-submit__button--submit'))

      expect(sendMessageMock).toHaveBeenCalled()
    })
  })
})
