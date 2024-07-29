import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import Box from '.';

describe('Box', () => {
  test('renders as div by default', () => {
    render(<Box>Box</Box>);

    expect(screen.getByText('Box').tagName).toBe('DIV');
  });

  test('renders as a different element', () => {
    render(<Box as="section">Box</Box>);

    expect(screen.getByText('Box').tagName).toBe('SECTION');
  });
});
