import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import PageHeader from '.';

describe('PageHeader', () => {
  test('renders null if no heading or description', () => {
    render(<PageHeader />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('pageHeader-description'),
    ).not.toBeInTheDocument();
  });
  test('renders heading & description', () => {
    render(<PageHeader heading="heading" description="description" />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('pageHeader-description')).toBeInTheDocument();
  });
});
