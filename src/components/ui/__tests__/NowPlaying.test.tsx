import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import NowPlaying, { resetNowPlayingStore } from '../NowPlaying';

const { mockLambdaNowPlaying } = vi.hoisted(() => ({
  mockLambdaNowPlaying: vi.fn(),
}));

vi.mock('../../../services/spotifyService', () => ({
  default: {
    lambdaNowPlaying: mockLambdaNowPlaying,
  },
}));

describe('NowPlaying', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockLambdaNowPlaying.mockReset();
    resetNowPlayingStore();
  });

  afterEach(() => {
    vi.useRealTimers();
    resetNowPlayingStore();
  });

  test('loads on mount and refreshes the song on the polling interval', async () => {
    mockLambdaNowPlaying
      .mockResolvedValueOnce({
        isPlaying: true,
        title: 'Track One',
        artist: 'Artist One',
        albumImageUrl: 'https://example.com/cover-1.jpg',
        songUrl: 'https://example.com/track-1',
      })
      .mockResolvedValueOnce({
        isPlaying: true,
        title: 'Track Two',
        artist: 'Artist Two',
        albumImageUrl: 'https://example.com/cover-2.jpg',
        songUrl: 'https://example.com/track-2',
      });

    render(<NowPlaying />);

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByRole('link', { name: 'Track One' })).toBeInTheDocument();
    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(1);

    await act(async () => {
      vi.advanceTimersByTime(3000);
      await Promise.resolve();
    });

    expect(screen.getByRole('link', { name: 'Track Two' })).toBeInTheDocument();
    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(2);
  });

  test('shows a visible spotify fallback when the request fails', async () => {
    mockLambdaNowPlaying.mockRejectedValueOnce(new Error('offline'));

    render(<NowPlaying />);

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText('Not Playing')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
  });
});
