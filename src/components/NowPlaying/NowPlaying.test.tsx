import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import React from 'react';
import NowPlaying from '.';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('NowPlaying Component', () => {
  test('renders the "Not Playing" message when not playing', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { isPlaying: false },
      isLoading: false,
      error: null,
    });

    render(<NowPlaying />);

    expect(screen.getByText('Not Playing')).toBeInTheDocument();
    expect(screen.queryByAltText('Album cover')).not.toBeInTheDocument();
    expect(screen.getByTestId('spotify-logo')).toBeInTheDocument();
  });

  test('renders the song information when playing', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        isPlaying: true,
        albumImageUrl:
          'https://i.scdn.co/image/ab67616d0000b27372b69f1f356613717909d6db',
        songUrl: 'https://example.com/song',
        title: 'Test Song',
        artist: 'Test Artist',
      },
      isLoading: false,
      error: null,
    });

    render(<NowPlaying />);

    expect(screen.getByAltText('Album cover')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b27372b69f1f356613717909d6db&w=256&q=75',
    );
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Song')).toHaveAttribute(
      'href',
      'https://example.com/song',
    );

    expect(screen.getByText('Test Artist')).toBeInTheDocument();
  });

  test('renders the animated bars when playing', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        isPlaying: true,
        albumImageUrl:
          'https://i.scdn.co/image/ab67616d0000b27372b69f1f356613717909d6db',
        songUrl: 'https://example.com/song',
        title: 'Test Song',
        artist: 'Test Artist',
      },
      isLoading: false,
      error: null,
    });

    render(<NowPlaying />);

    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b27372b69f1f356613717909d6db&w=256&q=75',
    );
  });
});
