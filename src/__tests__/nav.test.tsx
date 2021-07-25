import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';

test('renders correctly and contains correct text', () => {
  const { container } = render(<Nav />);

  const navLink = container.querySelectorAll('a');

  expect(navLink[0]).toHaveTextContent('Luke H');
  expect(navLink[0]).toHaveAttribute('href', '/');

  expect(navLink[1]).toHaveTextContent('Home');
  expect(navLink[1]).toHaveAttribute('href', '/');

  expect(navLink[2]).toHaveTextContent('Blog');
  expect(navLink[2]).toHaveAttribute('href', '/blog');

  expect(navLink[3]).toHaveTextContent('Projects');
  expect(navLink[3]).toHaveAttribute('href', '/projects');
});
