/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogItem from '../BlogItem';

test('renders the BlogItem component', () => { 
  const blog = render(<BlogItem />)
  expect(blog).toBeInTheDocument();
})