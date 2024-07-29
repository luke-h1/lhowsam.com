import ToastContextProvider from '@frontend/context/ToastContext';
import baseRender from '@frontend/test/render';
import { ToastProvider as RadixToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider as RadixTooltipProvider } from '@radix-ui/react-tooltip';
import { fireEvent, screen, within } from '@testing-library/react';
import CommandMenu from '.';

function render(ui: JSX.Element) {
  return baseRender(ui, {
    wrapper: ({ children }) => (
      <ToastContextProvider>
        <RadixToastProvider>
          <RadixTooltipProvider>{children}</RadixTooltipProvider>
        </RadixToastProvider>
      </ToastContextProvider>
    ),
  });
}
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('CommandMenu', () => {
  beforeEach(() => {
    render(<CommandMenu />);
    fireEvent.click(screen.getByRole('button', { name: 'Open command menu' }));
  });
  test('Search filters list of items correctly', async () => {
    const input = screen.getByPlaceholderText('Type a command or search...');
    fireEvent.change(input, { target: { value: 'home' } });

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    expect(screen.queryByText('Navigation')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'random' } });
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('No results found')).not.toBeInTheDocument();
  });

  test('renders navigation items correctly', async () => {
    const navigationItems = screen.getByTestId('CommandMenu-navigation');

    expect(within(navigationItems).getByText('Home')).toBeInTheDocument();
    expect(within(navigationItems).getByText('About')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Blog')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Projects')).toBeInTheDocument();
    expect(within(navigationItems).getByText('Talks')).toBeInTheDocument();
  });
  test('renders social items correctly', () => {
    const socialItems = screen.getByTestId('CommandMenu-social');

    expect(within(socialItems).getByText('Twitter')).toBeInTheDocument();
    expect(within(socialItems).getByText('GitHub')).toBeInTheDocument();
    expect(within(socialItems).getByText('LinkedIn')).toBeInTheDocument();
  });
  test('renders Appearance items correctly', () => {
    const apperanceItems = screen.getByTestId('CommandMenu-apperance');

    expect(within(apperanceItems).getByText('System')).toBeInTheDocument();
    expect(within(apperanceItems).getByText('Light')).toBeInTheDocument();
    expect(within(apperanceItems).getByText('Dark')).toBeInTheDocument();
  });
  test('renders Commands items correctly', () => {
    const commandItems = screen.getByTestId('CommandMenu-commands');

    expect(
      within(commandItems).getByText('Copy current URL'),
    ).toBeInTheDocument();
  });

  test.each([
    ['Home', 'Home'],
    ['About', 'About'],
    ['Blog', 'Blog'],
    ['Projects', 'Projects'],
    ['Talks', 'Talks'],
  ])('%s link navigates correctly', async (item, expected) => {
    const navigationItems = screen.getByTestId('CommandMenu-navigation');

    const itemElement = within(navigationItems).getByText(item);
    fireEvent.click(itemElement);

    if (expected === 'Home') {
      expect(mockPush).toHaveBeenCalledWith('/');
    } else {
      expect(mockPush).toHaveBeenCalledWith(`/${expected.toLowerCase()}`);
    }
  });

  test('Appearance items changes theme correctly', async () => {});
  test('Commands item copies currently URL to clipboard', async () => {});
});
