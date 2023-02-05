import { fireEvent, render, screen } from '@testing-library/react';
import Banner from '../Banner/Banner';

describe('Banner', () => {
  test('it renders correctly', () => {
    const setOpen = jest.fn();

    render(<Banner setOpen={setOpen} />);

    expect(screen.getByText('Open command menu')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByTestId('cmdk-icon')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Open command menu'));

    expect(setOpen).toHaveBeenCalledTimes(1);
  });
});
