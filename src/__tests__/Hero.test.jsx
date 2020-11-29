import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../components/Hero/Hero';

test('it renders properly', () => {
  const container = ReactDOM.render(<Hero />);
  expect(container).toMatchSnapshot();
});
