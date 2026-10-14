import { notifyManager } from '@tanstack/react-query';
import { act, cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import NowPlaying from '../NowPlaying';

const { mockLambdaNowPlaying } = vi.hoisted(() => ({
  mockLambdaNowPlaying: vi.fn(),
}));

vi.mock('../../../services/spotifyService', () => ({
  default: {
    lambdaNowPlaying: mockLambdaNowPlaying,
  },
}));

notifyManager.setScheduler(queueMicrotask);

const advance = async (ms: number) => {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
};

const setWindowFocused = (focused: boolean) => {
  vi.spyOn(document, 'hasFocus').mockReturnValue(focused);
  window.dispatchEvent(new Event(focused ? 'focus' : 'blur'));
};

describe('NowPlaying', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockLambdaNowPlaying.mockReset();
    setWindowFocused(true);
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
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
    await advance(0);

    expect(screen.getByRole('link', { name: 'Track One' })).toBeInTheDocument();
    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(1);

    await advance(3000);

    expect(screen.getByRole('link', { name: 'Track Two' })).toBeInTheDocument();
    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(2);
  });

  test('pauses polling while the window is unfocused and refreshes on focus', async () => {
    mockLambdaNowPlaying.mockResolvedValue({ isPlaying: false });

    render(<NowPlaying />);
    await advance(0);

    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(1);

    act(() => setWindowFocused(false));
    await advance(9000);

    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(1);

    act(() => setWindowFocused(true));
    await advance(0);

    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(2);

    await advance(3000);

    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(3);
  });

  test('only fetches once when mounted in an unfocused window', async () => {
    mockLambdaNowPlaying.mockResolvedValue({ isPlaying: false });
    setWindowFocused(false);

    render(<NowPlaying />);
    await advance(9000);

    expect(mockLambdaNowPlaying).toHaveBeenCalledTimes(1);
  });

  test('shows a visible spotify fallback when the request fails', async () => {
    mockLambdaNowPlaying.mockRejectedValueOnce(new Error('offline'));

    render(<NowPlaying />);
    await advance(0);

    expect(screen.getByText('Not Playing')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
  });
});
