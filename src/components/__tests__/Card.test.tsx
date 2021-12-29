import Card from '@src/components/Card';
import { Project } from '@src/types/project';
import { render, screen } from '@testing-library/react';

describe('card', () => {
  const testProject: Project = {
    id: '1',
    title: 'test',
    intro: 'test intro',
    content: 'test content',
    slug: 'test-slug',
    tech: ['test', 'test2'],
    siteUrl: 'https://www.google.com',
    githubUrl: 'https://github.com',
  };

  const secondTestProject: Project = {
    id: '1',
    title: 'test',
    intro: 'test intro',
    content: 'test content',
    slug: 'test-slug',
    tech: ['test', 'test2'],
    githubUrl: 'https://github.com',
  };

  test('renders correctly with all props', () => {
    render(<Card project={testProject} />);

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByText('test intro')).toBeVisible();
    expect(screen.getByTestId('github-url')).toHaveAttribute(
      'href',
      'https://github.com',
    );

    expect(screen.getByTestId('site-url')).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
  });

  test('renders correctly with not all props', () => {
    render(<Card project={secondTestProject} />);

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByText('test intro')).toBeVisible();
    expect(screen.getByTestId('github-url')).toHaveAttribute(
      'href',
      'https://github.com',
    );
  })
});
