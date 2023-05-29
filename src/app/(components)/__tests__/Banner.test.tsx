import { NavigationContextProvider } from '@frontend/context/NavigationContext';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner/Banner';

describe('Banner', () => {
  test.skip('it renders correctly', async () => {
    render(
      <NavigationContextProvider>
        <Banner />
      </NavigationContextProvider>,
    );

    expect(screen.getByText('Open command menu')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByTestId('cmdk-icon')).toBeInTheDocument();

    screen.debug();
  });
});
