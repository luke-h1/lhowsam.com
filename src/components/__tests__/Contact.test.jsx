/* eslint-disable */
import React from 'react';
import Contact from '../Contact/Contact';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Contact />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});