import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  test('renders as h2 by default', () => {
    render(<Heading>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H2');
  });

  test('renders as a different element', () => {
    render(<Heading as="h1">Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H1');
  });
});
