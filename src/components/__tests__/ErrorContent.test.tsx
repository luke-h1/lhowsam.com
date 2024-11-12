import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorContent from '../ErrorContent';

describe('ErrorContent Component', () => {
  test('renders 404 error content correctly', () => {
    render(<ErrorContent statusCode="404" title="Page Not Found" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page Not Found',
    );
    expect(
      screen.getByText("If you typed the web address, check it's correct."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'If you copied and pasted the web address, check you copied the entire address.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'If the web address is correct or you clicked a link or button and ended up on this page, please raise a',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub issue' })).toHaveAttribute(
      'href',
      'https://github.com/luke-h1/lhowsam.com/issues',
    );
    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  test('renders 500 error content correctly', () => {
    render(<ErrorContent statusCode="500" title="Internal Server Error" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Internal Server Error',
    );
    expect(
      screen.getByText(
        'It looks like something went wrong. Please try again later. In the meantime, please raise a',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub issue' })).toHaveAttribute(
      'href',
      'https://github.com/luke-h1/lhowsam.com/issues',
    );
    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
