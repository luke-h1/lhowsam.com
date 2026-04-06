import type { Song } from '../types/spotify';

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

const spotifyService = {
  async lambdaNowPlaying(): Promise<Song> {
    const baseUrl = import.meta.env.PUBLIC_NOW_PLAYING_API_BASE_URL;
    const key = import.meta.env.PUBLIC_NOW_PLAYING_API_KEY;
    const consumer = getConsumer();
    const response = await fetch(
      `${String(baseUrl).replace(/\/$/, '')}/api/now-playing`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-consumer': consumer,
          'x-api-key': key ?? '',
        },
      },
    );
    return response.json() as Promise<Song>;
  },
};

export default spotifyService;
