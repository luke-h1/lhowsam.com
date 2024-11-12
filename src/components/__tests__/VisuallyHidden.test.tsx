import render from '@frontend/test/render';
import VisuallyHidden from '../VisuallyHidden';

describe('VisuallyHidden', () => {
  test('renders correctly with no `as` prop', () => {
    const { container } = render(<VisuallyHidden>Test</VisuallyHidden>);

    expect(container.querySelector('#visually-hidden')).toHaveTextContent(
      'Test',
    );

    expect(container.querySelector('#visually-hidden')).toHaveProperty(
      'tagName',
      'SPAN',
    );
  });

  test('renders correctly with `as` props', () => {
    const { container } = render(<VisuallyHidden as="h1">Test</VisuallyHidden>);

    expect(container.querySelector('#visually-hidden')).toHaveTextContent(
      'Test',
    );
    expect(container.querySelector('#visually-hidden')).toHaveProperty(
      'tagName',
      'H1',
    );
  });
});
