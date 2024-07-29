import Filter from '@frontend/components/Filter';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

describe('Filter Component', () => {
  const mockOnClick = jest.fn();
  const mockRemoveFilter = jest.fn();
  const filters = ['filter1', 'filter2'];

  beforeEach(() => {
    render(
      <Filter
        filters={filters}
        onClick={mockOnClick}
        removeFilter={mockRemoveFilter}
        filter="filter1"
      />,
    );
  });

  test('renders all filters plus the "Recently Added" button', () => {
    expect(screen.getByText('Recently Added')).toBeInTheDocument();
    filters.forEach(filter => {
      expect(screen.getByText(filter)).toBeInTheDocument();
    });
  });

  test('"Recently Added" button calls removeFilter on click', () => {
    fireEvent.click(screen.getByText('Recently Added'));
    expect(mockRemoveFilter).toHaveBeenCalled();
  });

  test('filter buttons call onClick on click', () => {
    filters.forEach(filter => {
      fireEvent.click(screen.getByText(filter));
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  test('aria-selected attribute is correctly set', () => {
    expect(
      screen.getByText('Recently Added').getAttribute('aria-selected'),
    ).toBe('false');

    expect(screen.getByText('filter1').getAttribute('aria-selected')).toBe(
      'true',
    );
  });
});
