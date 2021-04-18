/* eslint-disable no-unused-expressions */
import { render, cleanup } from '@testing-library/react';
import About from '../../pages/about';

afterEach(cleanup);

test('intro component has correct text + renders correctly', () => {
  const { getByTestId } = render(<About />);
  const photo = getByTestId('photo');
  const text1 = getByTestId('about-intro');

  expect(text1.textContent).toBe(
    'Hi, my name is Luke and I enjoy working on big projects and thinking about how solutions can be implemented in order to build scalable & maintainable software.',
  );
  // test headshot is visible
  expect(photo).toBeVisible;
});
