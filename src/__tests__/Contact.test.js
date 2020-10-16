import React from 'react';
import { create } from 'react-test-renderer';
import Contact from '../components/Contact';

test('snapshot', () => {
  const component = create(<Contact />);
  expect(component.toJSON()).toMatchSnapshot();
});
