import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import App from './App'

it('renders the main heading', () => {
  render(<App />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Get started' })
  ).toBeTruthy()
})