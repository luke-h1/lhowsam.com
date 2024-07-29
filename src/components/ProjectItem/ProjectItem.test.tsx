import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import omit from 'lodash/omit';
import { project } from '../__tests__/__mocks__/project';
import ProjectItem from '.';

describe('ProjectItem', () => {
  test('renders ProjectItem', () => {
    render(<ProjectItem project={project} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: 'My website',
    });
    expect(heading).toBeInTheDocument();

    const intro = screen.getByTestId('project-intro');
    expect(intro).toHaveTextContent('project intro');

    const githubLink = screen.getByTestId('project-github');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/luke-h1/lhowsam.com',
    );

    const siteLink = screen.getByTestId('project-siteUrl');
    expect(siteLink).toHaveAttribute('href', 'https://lhowsam.com');
  });
  test("doesn't render site link if not provided", () => {
    render(<ProjectItem project={omit(project, 'siteUrl')} />);

    const siteLink = screen.queryByTestId('project-siteUrl');
    expect(siteLink).not.toBeInTheDocument();
  });
});
