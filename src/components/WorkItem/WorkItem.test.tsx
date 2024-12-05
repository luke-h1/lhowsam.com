import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import { mockWorks } from '../__tests__/__mocks__/work';
import WorkItem from '.';

describe('workItem', () => {
  test('renders correctly', () => {
    render(<WorkItem work={mockWorks[0]} />);

    expect(screen.getByText('GLS (game launch service)')).toBeInTheDocument();
    expect(screen.getByText('flutter intro')).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/work/gls-game-launch-service',
    );
  });
});
