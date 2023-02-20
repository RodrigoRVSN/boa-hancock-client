import { render, screen } from '@testing-library/react'
import { expect, it, describe } from 'vitest'
import { AvatarLoading } from '.'

describe('<AvatarLoading />', () => {
  it('should be able to load the correct number of avatar loading', () => {
    render(<AvatarLoading numberOfLoaders={2} />)

    expect(screen.getAllByTestId('avatar-loading')).toHaveLength(2)
  })

  it('should be able to load the correct number of avatars by default', () => {
    render(<AvatarLoading />)

    expect(screen.getAllByTestId('avatar-loading')).toHaveLength(1)
  })
})
