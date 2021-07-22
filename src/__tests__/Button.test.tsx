import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';

test('renders correctly', () => {
  const { container } = render(<Button href="/test">Hello</Button>);

  const buttonLink = container.querySelectorAll('a');

  expect(buttonLink[0]).toHaveAttribute('href', '/test');

  expect(buttonLink[0]).toHaveTextContent('Hello');
});
