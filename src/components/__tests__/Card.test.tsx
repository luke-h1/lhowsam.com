import Card from '@src/components/Card';
import { Project } from '@src/types/project';
import { render, screen } from '@testing-library/react';

describe('card', () => {
  const testProject: Project = {
    id: '1',
    title: 'title',
    intro: 'test intro',
    content: 'test content',
    slug: 'test-slug',
    tech: ['React', 'Node'],
    siteUrl: 'https://www.google.com',
    githubUrl: 'https://github.com',
  };

  const secondTestProject: Project = {
    id: '1',
    title: 'second title',
    intro: 'second intro',
    content: 'test content',
    slug: 'test-slug',
    tech: ['test', 'test2'],
    githubUrl: 'https://github.com',
  };

  test('renders correctly with all props', () => {
    render(<Card project={testProject} />);

    expect(screen.getByText('title')).toBeVisible();
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

    expect(screen.getByText('second title')).toBeVisible();
    expect(screen.getByText('second intro')).toBeVisible();
    expect(screen.getByTestId('github-url')).toHaveAttribute(
      'href',
      'https://github.com',
    );
  });

  test('renders tags correctly', () => {
    render(<Card project={testProject} />);
    expect(screen.getByText('React')).toBeVisible();
    expect(screen.getByText('Node')).toBeVisible();
  });
});
