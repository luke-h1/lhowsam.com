import { render, screen } from '@testing-library/react';
import React from 'react';
import Intro from '.';

describe('Intro Component', () => {
  test('renders intro heading correctly', () => {
    render(<Intro />);

    expect(screen.getByTestId('intro-heading')).toHaveTextContent(
      'SWE interested in React Native, Mobile, DevOps, TypeScript and all things in-between',
    );
  });

  test('renders headshot correctly', () => {
    render(<Intro />);

    expect(screen.getByAltText('Headshot')).toBeInTheDocument();
  });

  test('renders cv and experience buttons correctly', () => {
    render(<Intro />);

    const readCvButton = screen.getByTestId('read-cv');
    expect(readCvButton).toBeInTheDocument();
    expect(readCvButton).toHaveAttribute('href', '/static/cv.pdf');

    const viewExperienceButton = screen.getByTestId('view-experience');
    expect(viewExperienceButton).toBeInTheDocument();
    expect(viewExperienceButton).toHaveAttribute('href', '/about#experience');
  });
});
