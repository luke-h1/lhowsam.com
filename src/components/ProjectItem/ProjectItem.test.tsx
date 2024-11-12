import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import React from 'react';
import { project } from '../__tests__/__mocks__/project';
import ProjectItem from '.';

describe('ProjectItem Component', () => {
  test('renders the project item correctly', () => {
    render(<ProjectItem project={project} />);

    expect(screen.getByTestId('project-link')).toHaveAttribute(
      'href',
      '/projects/lhowsam.com',
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'alt');
    expect(screen.getByTestId('project-title')).toHaveTextContent('My website');
    expect(screen.getByText('project intro')).toBeInTheDocument();
  });

  test('renders the GitHub link correctly', () => {
    render(<ProjectItem project={project} />);

    const githubLink = screen.getByTestId('project-github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/luke-h1/lhowsam.com',
    );
  });

  test('renders the site link correctly', () => {
    render(<ProjectItem project={project} />);

    const siteLink = screen.getByTestId('project-siteUrl');
    expect(siteLink).toBeInTheDocument();
    expect(siteLink).toHaveAttribute('href', 'https://lhowsam.com');
  });

  test('does not render the site link if siteUrl is not provided', () => {
    const projectWithoutSiteUrl = { ...project, siteUrl: undefined };
    render(<ProjectItem project={projectWithoutSiteUrl} />);

    expect(screen.queryByTestId('project-siteUrl')).not.toBeInTheDocument();
  });
});
