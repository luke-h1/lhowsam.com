import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSelect from '.';

describe('ThemeSelect', () => {
  test('renders correctly', () => {
    render(<ThemeSelect />);
  });
  test('defaults to system theme', () => {
    const { container } = render(<ThemeSelect />);
    expect(screen.getByTestId('ThemeSelect-system')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('switches theme to light', async () => {
    render(<ThemeSelect />);

    await userEvent.selectOptions(screen.getByLabelText('Select theme'), [
      screen.getByText('Light'),
    ]);

    expect(screen.getByTestId('ThemeSelect-light')).toBeInTheDocument();
  });
  test('switches theme to dark', async () => {
    render(<ThemeSelect />);

    await userEvent.selectOptions(screen.getByLabelText('Select theme'), [
      screen.getByText('Dark'),
    ]);

    expect(screen.getByTestId('ThemeSelect-dark')).toBeInTheDocument();
  });
});
