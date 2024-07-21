import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import Box from '../Box';

describe('Box', () => {
  test('renders as div by default', () => {
    render(<Box>Box</Box>);

    expect(screen.getByText('Box').tagName).toBe('DIV');
  });
});
