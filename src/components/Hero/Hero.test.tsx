import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import Hero from '.';

describe('Hero', () => {
  test('renders heading and description', () => {
    // Arrange
    // Act
    // Assert
    render(<Hero heading="Heading" description="Description" />);
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
  test('renders `More about me` link', () => {
    render(<Hero heading="Heading" description="Description" />);

    const aboutLink = screen.getByRole('link', {
      name: 'More about me',
    });

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink).toHaveTextContent('More about me');
  });
});
