import { cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import RecentTracks from '../RecentTracks';

const { mockRecentTracks } = vi.hoisted(() => ({
  mockRecentTracks: vi.fn(),
}));

vi.mock('../../../services/spotifyService', () => ({
  default: {
    recentTracks: mockRecentTracks,
  },
}));

describe('RecentTracks', () => {
  beforeEach(() => {
    mockRecentTracks.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  test('renders a now-playing track and historical scrobbles', async () => {
    mockRecentTracks.mockResolvedValue({
      tracks: [
        {
          title: 'Live song',
          artist: 'Live artist',
          album: 'Live album',
          albumImageUrl: 'https://example.com/live.jpg',
          songUrl: 'https://last.fm/live',
          nowPlaying: true,
          playedAt: null,
        },
        {
          title: 'Old song',
          artist: 'Old artist',
          album: 'Old album',
          albumImageUrl: 'https://example.com/old.jpg',
          songUrl: 'https://last.fm/old',
          nowPlaying: false,
          playedAt: Math.floor(Date.now() / 1000) - 3600,
        },
      ],
    });

    render(<RecentTracks />);

    expect(await screen.findByText('Live song')).toBeInTheDocument();
    expect(screen.getByText('Now playing')).toBeInTheDocument();
    expect(screen.getByText('Old song')).toBeInTheDocument();
    expect(screen.getByText(/ago$/)).toBeInTheDocument();
  });

  test('shows an error state when the request fails', async () => {
    mockRecentTracks.mockRejectedValue(new Error('boom'));

    render(<RecentTracks />);

    await waitFor(() => {
      expect(
        screen.getByText('Could not load recent tracks right now.'),
      ).toBeInTheDocument();
    });
  });
});
