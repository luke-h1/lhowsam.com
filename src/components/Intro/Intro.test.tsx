import { render, screen } from '@testing-library/react';
import React from 'react';
import Intro from '.';

describe('Intro Component', () => {
  test('renders the intro heading correctly', () => {
    render(<Intro />);

    expect(screen.getByTestId('intro-heading')).toHaveTextContent(
      'Software Engineer interested in DevOps, React, Python, TypeScript and AWS.',
    );
  });

  test('renders the image correctly', () => {
    render(<Intro />);

    const image = screen.getByAltText('Headshot');
    expect(image).toBeInTheDocument();
  });

  test('renders the buttons correctly', () => {
    render(<Intro />);

    const readCvButton = screen.getByTestId('read-cv');
    expect(readCvButton).toBeInTheDocument();
    expect(readCvButton).toHaveAttribute('href', '/static/cv.pdf');

    const viewExperienceButton = screen.getByTestId('view-experience');
    expect(viewExperienceButton).toBeInTheDocument();
    expect(viewExperienceButton).toHaveAttribute('href', '/about#experience');
  });
});
