/* eslint-disable no-unused-expressions */
import { render, cleanup } from '@testing-library/react';
import About from '../../pages/about';

afterEach(cleanup);

test('intro component has correct text + renders correctly', () => {
  const { getByTestId } = render(<About />);
  const photo = getByTestId('photo');
  const text1 = getByTestId('about-intro');
  const text2 = getByTestId('about-intro-2');

  expect(text1.textContent).toBe(
    'I enjoy working with React, Node, testing tech + practices, dev-ops / cloud services & various backend languages',
  );

  expect(text2.textContent).toBe(
    'I am currently working with React, Next, Node, Python, Express & Typescript.',
  );

  // test headshot is visible
  expect(photo).not.toBeInTheDocument;
});
