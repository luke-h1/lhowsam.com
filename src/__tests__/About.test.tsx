import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders correctly', () => {
  render(<About />);

  expect(screen.getByText('Hey 👋, I\'m Luke')).toBeInTheDocument()

  expect(screen.getByText('I like building and testing projects that are scalable, performant & user friendly')).toBeInTheDocument()

  expect(screen.getByText('I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment')).toBeInTheDocument()

});
