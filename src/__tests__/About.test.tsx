import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

test('renders correctly', () => {
  const { container } = render(<About />);

  expect(container).toHaveTextContent("Hey 👋, I'm Luke");

  expect(container).toHaveTextContent(
    'I like building and testing projects that are scalable, performant & user friendly'
  );
  expect(container).toHaveTextContent(
    'I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment'
  );
});
