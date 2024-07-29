import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import Skills, { skills } from '.';

describe('Skills', () => {
  test('renders correctly', () => {
    const { container } = render(<Skills />);
    skills.forEach(skill => {
      expect(screen.getByText(skill.text)).toBeInTheDocument();
      expect(screen.getByTestId(`${skill.text}-icon`)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
