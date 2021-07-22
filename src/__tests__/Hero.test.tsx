import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

test('renders correctly', () => {
  const { container } = render(<Hero />);

  expect(container).toHaveTextContent("Hey, I'm Luke");

  expect(container).toHaveTextContent(
    'I enjoy working on big projects and thinking about how solutions can be implemented in order to build scalable & maintainable software. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment'
  );
});
