import { fireEvent, render, screen } from '@testing-library/react'
import { vi, expect, it, describe } from 'vitest'
import { Footer } from '.'
import { footerRoutes } from './Footer.data'

const pushMock = vi.fn()

vi.mock('next/router', () => ({
  useRouter () {
    return {
      push: pushMock
    }
  }
}))

describe('<Footer />', () => {
  it.each(footerRoutes)('should be able to render and go to $path link', ({ path }) => {
    render(<Footer />)

    fireEvent.click(screen.getByTestId(`footer__link--${path}`))

    expect(pushMock).toHaveBeenCalledWith(path)
  })
})
