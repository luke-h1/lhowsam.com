import Nav from '../components/Nav';
import { render, screen } from '@testing-library/react';

describe('nav', () => {
  test('correct links are shown', () => {
    render(<Nav />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
