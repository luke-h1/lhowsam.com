import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav/Nav';
import { theme } from '../styles/Theme';

afterEach(cleanup);

test('navbar renders correctly', () => {
  const { container, getByTestId, getByText } = render(<Nav theme={theme} />);
  const home = getByTestId('home');
  const about = getByTestId('about');
  const project = getByTestId('project');
  const blog = getByTestId('blog');
  expect(home.textContent).toEqual('Home');
});
