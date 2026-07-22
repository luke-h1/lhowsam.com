import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import TopTracks from '../TopTracks';

const { mockTopTracks } = vi.hoisted(() => ({
  mockTopTracks: vi.fn(),
}));

vi.mock('../../../services/spotifyService', () => ({
  default: {
    topTracks: mockTopTracks,
  },
}));

function trackFixture(title: string) {
  return {
    title,
    artist: `${title} artist`,
    album: `${title} album`,
    albumImageUrl: `https://example.com/${title}.jpg`,
    songUrl: `https://open.spotify.com/${title}`,
  };
}

describe('TopTracks', () => {
  beforeEach(() => {
    mockTopTracks.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  test('loads the default medium_term range on mount', async () => {
    mockTopTracks.mockResolvedValue({ tracks: [trackFixture('Alpha')] });

    render(<TopTracks />);

    expect(await screen.findByText('Alpha')).toBeInTheDocument();
    expect(mockTopTracks).toHaveBeenCalledWith('medium_term', 12);
  });

  test('refetches when a different time range is selected', async () => {
    mockTopTracks
      .mockResolvedValueOnce({ tracks: [trackFixture('Alpha')] })
      .mockResolvedValueOnce({ tracks: [trackFixture('Beta')] });

    render(<TopTracks />);
    expect(await screen.findByText('Alpha')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'All time' }));

    await waitFor(() => {
      expect(screen.getByText('Beta')).toBeInTheDocument();
    });
    expect(mockTopTracks).toHaveBeenLastCalledWith('long_term', 12);
  });
});
