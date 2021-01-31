/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from '@pages/about';

afterEach(cleanup);

test('intro component has correct text + renders correctly', () => {
  const { getByTestId } = render(<About />);
  const photo = getByTestId('photo');
  const text1 = getByTestId('about-intro1');

  expect(text1.textContent).toBe('I\'m passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies');

  const text2 = getByTestId('about-intro2');
  expect(text2.textContent).toEqual('I am currently Learning Typescript, React, Next JS & various testing technologies.');

  // test headshot is visible
  expect(photo).toBeVisible;
});
