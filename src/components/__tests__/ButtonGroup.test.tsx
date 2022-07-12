import { render, screen } from '@testing-library/react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

describe('ButtonGroup', () => {
  it('renders correctly with children & className', () => {
    render(
      <ButtonGroup className="wrap" testId="button-group">
        Hello
      </ButtonGroup>,
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('button-group')).toHaveAttribute(
      'class',
      'group wrap',
    );
  });
});
