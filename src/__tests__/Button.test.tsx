import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders correctly', () => {
  render(<Button href="/test">Hello</Button>);

  expect(screen.getByRole('link')).toHaveAttribute('href', '/test')
  expect(screen.getByText('Hello')).toBeInTheDocument()
});
