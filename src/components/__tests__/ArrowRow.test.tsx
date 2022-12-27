import { render, screen } from '@testing-library/react';
import ArrowRow from '../ArrowRow/ArrowRow';

describe('ArrowRow', () => {
  test('renders a right arrow with `right` prop supplied', () => {
    render(<ArrowRow position="right" />);

    const arrow = screen.getByTestId('arrow-right');

    expect(arrow).toHaveClass('arrowRight');
  });

  test('renders a left arrow with `left` prop supplied', () => {
    render(<ArrowRow position="left" />);

    const arrow = screen.getByTestId('arrow-left');

    expect(arrow).toHaveClass('arrowLeft');
  });
});
