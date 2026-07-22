import type {
  RecentTracksResponse,
  Song,
  TopTracksResponse,
  TopTracksTimeRange,
} from '../types/spotify';

function getConsumer(): string {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL;

  if (!baseUrl) {
    return 'unknown';
  }

  switch (new URL(baseUrl).origin) {
    case 'https://dev.lhowsam.com':
      return 'lhowsam-dev';
    case 'https://lhowsam.com':
      return 'lhowsam-prod';
    case 'https://www.lhowsam.com':
      return 'lhowsam-prod';
    case 'http://localhost:3000':
    case 'http://localhost:4321':
    case 'http://127.0.0.1:3000':
    case 'http://127.0.0.1:4321':
      return 'lhowsam-local';
    default:
      return 'unknown';
  }
}

async function request<T>(path: string): Promise<T> {
  const baseUrl = import.meta.env.PUBLIC_NOW_PLAYING_API_BASE_URL;
  const key = import.meta.env.PUBLIC_NOW_PLAYING_API_KEY;
  const consumer = getConsumer();
  const response = await fetch(`${String(baseUrl).replace(/\/$/, '')}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-consumer': consumer,
      'x-api-key': key ?? '',
    },
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

const spotifyService = {
  lambdaNowPlaying(): Promise<Song> {
    return request<Song>('/api/now-playing');
  },
  recentTracks(limit = 10): Promise<RecentTracksResponse> {
    return request<RecentTracksResponse>(`/api/recent-tracks?limit=${limit}`);
  },
  topTracks(
    timeRange: TopTracksTimeRange = 'medium_term',
    limit = 12,
  ): Promise<TopTracksResponse> {
    return request<TopTracksResponse>(
      `/api/top-tracks?time_range=${timeRange}&limit=${limit}`,
    );
  },
};

export default spotifyService;
