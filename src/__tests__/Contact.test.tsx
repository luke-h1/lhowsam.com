import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/Contact';

test('diplays correct text', () => {
  const { container } = render(<Contact />);

  const link = container.querySelectorAll('a');

  expect(link[0]).toHaveAttribute('href', 'mailto:luke.howsam54@gmail.com');
  expect(link[0]).toHaveTextContent('email');

  expect(link[1]).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/lukehowsam'
  );
  expect(link[1]).toHaveTextContent('Linkedin');

  expect(link[2]).toHaveAttribute('href', 'https://github.com/luke-h1');
  expect(link[2]).toHaveTextContent('Github');
});
