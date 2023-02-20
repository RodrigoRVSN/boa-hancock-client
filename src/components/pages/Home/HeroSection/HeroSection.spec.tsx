import { render, screen } from '@testing-library/react'
import { expect, it, describe } from 'vitest'
import { HeroSection } from '.'

describe('<HeroSection />', () => {
  it('should be able to render the button login href in link', () => {
    process.env.NEXT_PUBLIC_API_URL = 'localhost'

    render(<HeroSection />)

    expect(screen.getByTestId('hero-section__button--login')).toHaveProperty('href', 'http://localhost:3000/localhost/auth/')
  })
})
