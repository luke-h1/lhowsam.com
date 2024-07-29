import baseRender from '@frontend/test/render';
import { ToastProvider as RadixToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider as RadixTooltipProvider } from '@radix-ui/react-tooltip';
import { fireEvent, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import SocialShare from '.';

function render(ui: JSX.Element) {
  return baseRender(ui, {
    wrapper: ({ children }) => (
      <RadixToastProvider>
        <MemoryRouterProvider>
          <RadixTooltipProvider>{children}</RadixTooltipProvider>
        </MemoryRouterProvider>
      </RadixToastProvider>
    ),
  });
}

const pathnameMock = jest.mocked(usePathname);

describe('SocialShare', () => {
  test('renders twitter link', () => {
    pathnameMock.mockReturnValue('/posts/123');
    render(<SocialShare />);

    expect(screen.getByTestId('SocialShare-Twitter'));

    const twitterLink = screen.getByTestId('SocialShare-Twitter');

    expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A3000%2Fposts%2F123',
    );
  });
  test('renders copy link', async () => {
    pathnameMock.mockReturnValue('/posts/123');
    render(<SocialShare />);

    const copyButton = screen.getByTestId('copy-button');
    fireEvent.click(copyButton);

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toEqual('http://localhost:3000/posts/123');
  });
});
