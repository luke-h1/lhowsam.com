/* eslint-disable */
import React from 'react';
import Footer from '../Footer/Footer';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Footer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});