import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav/Nav';
import { theme } from '../styles/Theme';

afterEach(cleanup);

test('navbar renders correctly', () => {
  const { getByTestId } = render(<Nav theme={theme} />);
  const home = getByTestId('home');
  const about = getByTestId('about');
  const project = getByTestId('project');
  const blog = getByTestId('blog');

  expect(home.textContent).toEqual('Home');
  expect(about.textContent).toEqual('About');
  expect(project.textContent).toEqual('Projects');
  expect(blog.textContent).toEqual('Blog');
});
